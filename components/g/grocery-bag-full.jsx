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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r2y409-0i {
  d: path("M7.059 2.756za1.5 1.5 0 0 1 1.837 1.06l1.165 4.347A1.5 1.5 0 0 1 9 10a1.5 1.5 0 0 1-1.837-1.061L5.998 4.593a1.5 1.5 0 0 1 1.061-1.837M14 10c0-3 1.5-5.25 4.5-6c.5 3-1.25 5.25-4.5 6");
}

.swmtrxi_h {
  d: path("M7.625 10h8.75A2.625 2.625 0 0 1 19 12.625v5.75A2.625 2.625 0 0 1 16.375 21h-8.75A2.625 2.625 0 0 1 5 18.375v-5.75A2.625 2.625 0 0 1 7.625 10");
}
</style><g class="hntgybcog"><path class="swmtrxi_h"/><path class="r2y409-0i"/></g>`,
		"fallback": "uix:grocery-bag-full",
	});
}

export default Component;
