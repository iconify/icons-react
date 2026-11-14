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
		"content": `<style>.e6nu4lk3f {
  d: path("M3.945 9.713L10.32 4.4a2.625 2.625 0 0 1 3.36 0l6.375 5.313A2.63 2.63 0 0 1 21 11.729v6.646A2.625 2.625 0 0 1 18.375 21H5.625A2.625 2.625 0 0 1 3 18.375v-6.646a2.63 2.63 0 0 1 .945-2.016");
}

.f5mv5v7eo {
  d: path("M5.75 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4.5 0h7.25M15 15v2.5m2.5-2.5v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e6nu4lk3f"/><path class="f5mv5v7eo"/></g>`,
		"fallback": "uix:house-for-rent",
	});
}

export default Component;
