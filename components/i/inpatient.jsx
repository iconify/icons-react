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

.jy7a_8w8s {
  d: path("M11.472 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.49 0 .963.039M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.m1m6gekuu {
  fill: currentColor;
  d: path("M15.75 15.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0");
}

.zrl998bmt {
  d: path("m8 14.5l2.5 2.5l.965-.965M7 18h.01m7.24-4v7.75m1.375-4.5h4.75a1.375 1.375 0 0 1 1.375 1.375A1.375 1.375 0 0 1 20.375 20h-4.75a1.375 1.375 0 0 1-1.375-1.375a1.375 1.375 0 0 1 1.375-1.375M21.5 20v1.75");
}
</style><g class="hntgybcog"><path class="jy7a_8w8s"/><path class="zrl998bmt"/><path class="m1m6gekuu"/></g>`,
		"fallback": "uix:inpatient",
	});
}

export default Component;
