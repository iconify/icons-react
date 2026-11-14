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

.n4i7sr83k {
  d: path("M5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.pc98gxbat {
  d: path("M5.125 8.5h6.75a2.625 2.625 0 0 1 2.625 2.625v3.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 2.5 14.875v-3.75A2.625 2.625 0 0 1 5.125 8.5M14.5 11h4l3 3.5v3h-7m-6-9v-6");
}
</style><g class="hntgybcog"><path class="pc98gxbat"/><path class="n4i7sr83k"/></g>`,
		"fallback": "uix:command-vehicle",
	});
}

export default Component;
