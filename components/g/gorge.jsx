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
		"content": `<style>.kw5nlv8vd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21L6 15l-1-5l4-6.5M21.5 21L18 15l1-5l-4-6.5M11 21c0-5 2-7 1-13");
}
</style><path class="kw5nlv8vd"/>`,
		"fallback": "uix-sharp:gorge",
	});
}

export default Component;
