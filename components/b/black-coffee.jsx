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

.rzfw-hbit {
  fill: currentColor;
  d: path("M5 9.5h10.5V16a3.5 3.5 0 0 1-3.5 3.5H8.5A3.5 3.5 0 0 1 5 16Z");
}

.xyfibl0wn {
  d: path("M15.5 11H17a2.5 2.5 0 0 1 0 5h-1.5m-8-12v2.5M10.25 4v2.5M13 4v2.5");
}
</style><g class="hntgybcog"><path class="rzfw-hbit"/><path class="xyfibl0wn"/></g>`,
		"fallback": "uix:black-coffee",
	});
}

export default Component;
