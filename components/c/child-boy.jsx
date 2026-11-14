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

.ouucy1b8t {
  d: path("M7.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-3 12.5c0-3 3.25-5 7.5-5s7.5 2 7.5 5");
}

.zh3ks8w9y {
  d: path("M7.75 6.5q4.25 1 5.75-2.75");
}
</style><g class="hntgybcog"><path class="ouucy1b8t"/><path class="zh3ks8w9y"/></g>`,
		"fallback": "uix:child-boy",
	});
}

export default Component;
