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
		"content": `<style>.drr-i7bjq {
  d: path("M7.75 4h7.5A1.75 1.75 0 0 1 17 5.75v2a1.75 1.75 0 0 1-1.75 1.75h-7.5A1.75 1.75 0 0 1 6 7.75v-2A1.75 1.75 0 0 1 7.75 4M17 5.5l3.5 1V7L17 8M9 9.5l-1.5 9.75q-.25 1.25 1 1.25H11q1.25 0 1.5-1.25l1.25-9.75M4 5.25h.5A1.5 1.5 0 0 1 6 6.75a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 5.25");
}

.g7ml47zea {
  d: path("M13.25 13h1.25q1.25 0 1.25-1.25V9.5m4.75.5c1.5 1.75 1.25 3.25 0 3.25s-1.5-1.5 0-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="drr-i7bjq"/><path class="g7ml47zea"/></g>`,
		"fallback": "uix:glue-gun",
	});
}

export default Component;
