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

.hrlywlcog {
  d: path("M8.25 10h2.25a2.25 2.25 0 1 1-2.25-2.25m7.5 2.25H13.5a2.25 2.25 0 1 0 2.25-2.25M8 16.5q1-1 2 0t2 0t2 0t2 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="hrlywlcog"/></g>`,
		"fallback": "uix:face-dizzy",
	});
}

export default Component;
