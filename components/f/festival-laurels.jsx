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

.uhapo8bun {
  d: path("M5.5 12a1 2.25 0 1 0 2 0a1 2.25 0 1 0-2 0m11 0a1 2.25 0 1 0 2 0a1 2.25 0 1 0-2 0M8 17a1 2.25 0 1 0 2 0a1 2.25 0 1 0-2 0m6 0a1 2.25 0 1 0 2 0a1 2.25 0 1 0-2 0");
}

.z5dd7rbmm {
  d: path("M10 20.5c-4.5-1-7-5-6.5-11.5M14 20.5c4.5-1 7-5 6.5-11.5m-17-3.5a1 2.25 0 1 0 2 0a1 2.25 0 1 0-2 0m15 0a1 2.25 0 1 0 2 0a1 2.25 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="z5dd7rbmm"/><path class="uhapo8bun"/></g>`,
		"fallback": "uix:festival-laurels",
	});
}

export default Component;
