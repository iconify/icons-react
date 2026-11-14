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

.iaoce7_1v {
  d: path("M17.625 13.75h1a1.125 1.125 0 0 1 1.125 1.125A1.125 1.125 0 0 1 18.625 16h-1a1.125 1.125 0 0 1-1.125-1.125a1.125 1.125 0 0 1 1.125-1.125m-.875 4.5h2.75m-2.75 2h1.75");
}

.l1tidk0ev {
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-4 14c0-4 3.5-6.5 8-6.5q.126 0 .251.003M16.25 15H20a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 20 22h-3.75a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="l1tidk0ev"/><path class="iaoce7_1v"/></g>`,
		"fallback": "uix:department-supervisor",
	});
}

export default Component;
