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
		"content": `<style>.atasye2_f {
  d: path("M15.172 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.276 0 2.462.203 3.497.575M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v97078bln {
  d: path("M5.25 11c-.75-4.5 1.5-8.75 5.25-8.75s6 4.25 5.25 8.75M18 21.5v-7m-3 3l3-3l3 3");
}
</style><g class="hntgybcog"><path class="atasye2_f"/><path class="v97078bln"/></g>`,
		"fallback": "uix:adolescent-health",
	});
}

export default Component;
