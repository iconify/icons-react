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
		"content": `<style>.dc2b_rb4w {
  d: path("M9.5 19v-2.5L15 11l2.5 2.5L12 19Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xv_y5yg6a {
  d: path("M7 5h10a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V8.5A3.5 3.5 0 0 1 7 5m1-2v4m8-4v4M3.5 10h17");
}
</style><g class="hntgybcog"><path class="xv_y5yg6a"/><path class="dc2b_rb4w"/></g>`,
		"fallback": "uix:booking-modify",
	});
}

export default Component;
