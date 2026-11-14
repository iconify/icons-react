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
		"content": `<style>.g3z87w_xu {
  d: path("M3 8V5a2 2 0 0 1 2-2h3m8 0h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3M9.25 9a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M7.5 19c0-3 2-4.5 4.5-4.5q.166 0 .328.009m6.343.326l2 1a1.5 1.5 0 0 1 .829 1.342v1.896a1.5 1.5 0 0 1-.829 1.342l-2 1a1.5 1.5 0 0 1-1.342 0l-2-1a1.5 1.5 0 0 1-.829-1.342v-1.896a1.5 1.5 0 0 1 .829-1.342l2-1a1.5 1.5 0 0 1 1.342 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jxdm_fbqs {
  d: path("M14.5 16.25L18 18l3.5-1.75M18 18v3.75");
}
</style><g class="hntgybcog"><path class="g3z87w_xu"/><path class="jxdm_fbqs"/></g>`,
		"fallback": "uix:face-scan-3d",
	});
}

export default Component;
