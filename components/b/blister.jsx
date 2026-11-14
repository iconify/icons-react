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
		"content": `<style>.b_87fby_x {
  d: path("M2.5 13.5H7c0-9 10-9 10 0h4.5M5 17.5h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r_avhhbyl {
  d: path("M10.5 11.5c0-1 .5-1.75 1.5-2");
}
</style><g class="hntgybcog"><path class="b_87fby_x"/><path class="r_avhhbyl"/></g>`,
		"fallback": "uix:blister",
	});
}

export default Component;
