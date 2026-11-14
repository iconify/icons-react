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

.oqb3-vbyd {
  d: path("m11.5 16l-4-4l4-4");
}

.p6ynz6blr {
  d: path("M3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375M16.5 12h-9");
}
</style><g class="hntgybcog"><path class="p6ynz6blr"/><path class="oqb3-vbyd"/></g>`,
		"fallback": "uix:arrow-left-square",
	});
}

export default Component;
