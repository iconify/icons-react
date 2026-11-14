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
		"content": `<style>.gdzzq6bxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4v13.5A2.5 2.5 0 0 0 8.5 20h7a2.5 2.5 0 0 0 2.5-2.5V4M6 7.5h12m-12 5h12");
}
</style><path class="gdzzq6bxw"/>`,
		"fallback": "uix-sharp:cortado",
	});
}

export default Component;
