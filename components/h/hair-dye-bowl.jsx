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
		"content": `<style>.q9nk49b1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12h17a8.5 8.5 0 0 1-17 0Zm7 0l4.75-4.75m2.457-4.578l2.121 2.121l-3.535 3.535l-2.121-2.121Z");
}
</style><path class="q9nk49b1i"/>`,
		"fallback": "uix-sharp:hair-dye-bowl",
	});
}

export default Component;
