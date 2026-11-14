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
		"content": `<style>.cj-1fmkvx {
  d: path("M6 6.5h4a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 14v-4A3.5 3.5 0 0 1 6 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x3a41gilc {
  d: path("M5.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11.415-3.441a6 6 0 0 1 0 6.882m1.979-9.226a9 9 0 0 1 0 11.57");
}
</style><g class="hntgybcog"><path class="cj-1fmkvx"/><path class="x3a41gilc"/></g>`,
		"fallback": "uix:depth-camera",
	});
}

export default Component;
