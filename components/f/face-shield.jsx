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
		"content": `<style>.g7_-2rb4f {
  d: path("M7 21.5V18c-2-1.5-2.75-3.5-2.75-5.75c0-3.75 2.75-6.5 6.25-6.5s6 2.25 6 5.75l1.25 3q.375.75-.75.75h-.5v2c0 1-.75 1.75-1.75 1.75H13v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s3cn8o35s {
  d: path("M13 3c5.5.75 8.5 5 8.5 9.5c0 3.5-1.5 6.25-3.75 7.75M5.75 6.5L13 3");
}
</style><g class="hntgybcog"><path class="g7_-2rb4f"/><path class="s3cn8o35s"/></g>`,
		"fallback": "uix:face-shield",
	});
}

export default Component;
