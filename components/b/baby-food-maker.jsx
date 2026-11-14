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
		"content": `<style>.qx-qeff6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9A1.5 1.5 0 0 1 18 4a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 4a1.5 1.5 0 0 1 1.5-1.5m.75 13l-1.5-10m10.5 0l-1.5 10m-10.25 6h13V18c0-1.5-1-2.5-2.5-2.5H8c-1.5 0-2.5 1-2.5 2.5Zm6.5-3h.01");
}
</style><path class="qx-qeff6g"/>`,
		"fallback": "uix:baby-food-maker",
	});
}

export default Component;
