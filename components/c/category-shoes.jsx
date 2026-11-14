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
		"content": `<style>.a0ws1ny-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17V8.5q0-1 1-1h3.5L9 10l5 2l4.5 1.5q3 .5 3 3.5Zm1.75 0h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 4.75 17m5.75-6.5l-.75 2m3.75-.75l-.75 2M16.5 13l-.75 2");
}
</style><path class="a0ws1ny-h"/>`,
		"fallback": "uix:category-shoes",
	});
}

export default Component;
