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
		"content": `<style>.gagpxubwp {
  d: path("M5.5 15L9 9.25l4.5-1.75l2 3.75m-2-3.75L12.75 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ku-acvbqq {
  d: path("m2.5 19.5l19-7.5m-19 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0m10-3.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="ku-acvbqq"/><path class="gagpxubwp"/></g>`,
		"fallback": "uix:bike-wheel-ramp",
	});
}

export default Component;
