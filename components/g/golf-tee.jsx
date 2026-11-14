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

.m9y-5hbvx {
  d: path("M7.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.t3w3ihbqn {
  d: path("M8 11.5h8l-3 3V19l-1 2l-1-2v-4.5Z");
}
</style><g class="hntgybcog"><path class="m9y-5hbvx"/><path class="t3w3ihbqn"/></g>`,
		"fallback": "uix:golf-tee",
	});
}

export default Component;
