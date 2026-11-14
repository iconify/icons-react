import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c53n_cbfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.152 5.77l4.949 4.95l-7.071 7.071l-4.949-4.95Zm-1.768-1.768l8.485 8.485m-1.414-7.071l-2.828 2.829m.707-4.95l4.242 4.243M8.555 15.316l-5.303 5.303");
}
</style><path class="c53n_cbfb"/>`,
		"fallback": "uix-sharp:dental-syringe",
	});
}

export default Component;
