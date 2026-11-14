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

.kju49ybrj {
  d: path("M9.5 3.25q2.5 3.75 0 7.5m5-7.5q-2.5 3.75 0 7.5m-6 10.75l3.5-7.25l3.5 7.25");
}

.m-kdtrbbd {
  d: path("M7.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-3 7.25h15m-13 0l2 7.25h7l2-7.25M7.5 7h9");
}
</style><g class="hntgybcog"><path class="m-kdtrbbd"/><path class="kju49ybrj"/></g>`,
		"fallback": "uix:free-throw",
	});
}

export default Component;
