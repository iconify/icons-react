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
		"content": `<style>.d6tv59bkk {
  d: path("M5 8.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M2.5 21c0-3.5 2.75-5.75 6-5.75c1.258 0 2.442.337 3.419.954M14.25 6a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M17 11.25c1.248 0 2.371.311 3.184.872M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.djjfg3v7u {
  fill: currentColor;
  d: path("M18 18v-3.5a3.5 3.5 0 0 1 3.5 3.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d6tv59bkk"/><path class="djjfg3v7u"/></g>`,
		"fallback": "uix:analytics-team",
	});
}

export default Component;
