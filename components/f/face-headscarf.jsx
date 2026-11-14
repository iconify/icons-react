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

.w617ctb6j {
  d: path("M7.75 12a4.25 5 0 1 0 8.5 0a4.25 5 0 1 0-8.5 0M5 18c3 2.5 11 2.5 14 0m-8.5-6.5h.01m2.99 0h.01");
}

.z7k4q_bvl {
  d: path("M4.5 21.5C5 18.5 5 15 5 11a7 7 0 0 1 14 0c0 4 0 7.5.5 10.5");
}
</style><g class="hntgybcog"><path class="z7k4q_bvl"/><path class="w617ctb6j"/></g>`,
		"fallback": "uix:face-headscarf",
	});
}

export default Component;
