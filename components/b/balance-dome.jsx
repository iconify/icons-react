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

.s8q_ybbid {
  d: path("M6.5 10.5c3 1.5 8 1.5 11 0");
}

.ze0zdkm_s {
  d: path("M4 15.5a8 8 0 0 1 16 0m-15.75 0h15.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 19H4.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="ze0zdkm_s"/><path class="s8q_ybbid"/></g>`,
		"fallback": "uix:balance-dome",
	});
}

export default Component;
