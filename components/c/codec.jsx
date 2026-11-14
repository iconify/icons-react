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
		"content": `<style>.r9f9_1b5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h5A3.5 3.5 0 0 1 14.5 7v2a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 9V7A3.5 3.5 0 0 1 6 3.5m-2 14h8m-2.25-2.25L12 17.5l-2.25 2.25m7.5-4.5h2.5A1.75 1.75 0 0 1 21.5 17v1a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15.5 18v-1a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="r9f9_1b5c"/>`,
		"fallback": "uix:codec",
	});
}

export default Component;
