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
		"content": `<style>.tuv6glbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 16h15.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 4.25 16M9 3.5h6A1.5 1.5 0 0 1 16.5 5v9.5A1.5 1.5 0 0 1 15 16H9a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 9 3.5m1.25 0V16m3.5-12.5V16M4.5 13v3m15-3v3");
}
</style><path class="tuv6glbme"/>`,
		"fallback": "uix:base-plate",
	});
}

export default Component;
