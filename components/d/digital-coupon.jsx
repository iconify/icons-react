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
		"content": `<style>.d3jigzxnt {
  d: path("M8.75 9h6.5v2a1 1 0 0 0 0 2v2h-6.5v-2a1 1 0 0 0 0-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j81d7yndt {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5m.125 2.75h3");
}
</style><g class="hntgybcog"><path class="j81d7yndt"/><path class="d3jigzxnt"/></g>`,
		"fallback": "uix:digital-coupon",
	});
}

export default Component;
