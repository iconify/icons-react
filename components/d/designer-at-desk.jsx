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
		"content": `<style>.qxf-7gt1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-1.5 9.5a4 4 0 0 1 8 0M14.625 8h4.25a2.625 2.625 0 0 1 2.625 2.625v2.25a2.625 2.625 0 0 1-2.625 2.625h-4.25A2.625 2.625 0 0 1 12 12.875v-2.25A2.625 2.625 0 0 1 14.625 8m2.125 7.5v3m-14.25 0h19");
}
</style><path class="qxf-7gt1m"/>`,
		"fallback": "uix:designer-at-desk",
	});
}

export default Component;
