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

.rs0b3lb4m {
  d: path("M9 6.25h2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 9 6.25");
}

.rvx706b4v {
  d: path("M4.75 7.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0M3 21.5c0-3.5 3-5.75 7-5.75s7 2.25 7 5.75m-1.5-4l4.5-12");
}
</style><g class="hntgybcog"><path class="rvx706b4v"/><path class="rs0b3lb4m"/></g>`,
		"fallback": "uix:astronaut-wave",
	});
}

export default Component;
