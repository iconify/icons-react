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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.yqlgpibun {
  d: path("M5.25 11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m8 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-2.5 0h2.5M9.5 16.5q2.5 1.5 5 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="yqlgpibun"/></g>`,
		"fallback": "uix:face-glasses",
	});
}

export default Component;
