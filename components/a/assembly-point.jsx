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
		"content": `<style>.p6f8vvbwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-8.5V6M9.5 5L12 3.5L14.5 5m-11 7H6M5 9.5L3.5 12L5 14.5M20.5 12H18m1-2.5l1.5 2.5l-1.5 2.5m-7 6V18m-2.5 1l2.5 1.5l2.5-1.5");
}
</style><path class="p6f8vvbwo"/>`,
		"fallback": "uix:assembly-point",
	});
}

export default Component;
