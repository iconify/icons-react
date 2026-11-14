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
		"content": `<style>.hllsxwbtc {
  d: path("m2.5 19.5l7.5-16l4 7.5l2-2.5l5.5 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pa6efk4gu {
  d: path("m7.75 8.25l2.25 2l2.5-2M18 14.5V18m0 3h.01");
}
</style><g class="hntgybcog"><path class="hllsxwbtc"/><path class="pa6efk4gu"/></g>`,
		"fallback": "uix:altitude-sickness",
	});
}

export default Component;
