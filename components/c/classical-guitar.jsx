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

.jr__51hvk {
  d: path("M10.75 17.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.qhuve9fxq {
  d: path("M10 14.5a2.5 2.5 0 1 1 4 0a3.75 3.75 0 1 1-4 0m2-4V6m0-3.5za1.25 1.25 0 0 1 1.25 1.25v1A1.25 1.25 0 0 1 12 6a1.25 1.25 0 0 1-1.25-1.25v-1A1.25 1.25 0 0 1 12 2.5");
}
</style><g class="hntgybcog"><path class="qhuve9fxq"/><path class="jr__51hvk"/></g>`,
		"fallback": "uix:classical-guitar",
	});
}

export default Component;
