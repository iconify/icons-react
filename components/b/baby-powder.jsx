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
		"content": `<style>.x18v7pctl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.875 10.75h4.25a4.375 4.375 0 0 1 4.375 4.375v2a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125v-2a4.375 4.375 0 0 1 4.375-4.375M5.5 14.25h13M7 8c-1.5 0-1.5-2.5.5-2.5C8 3 11 2.5 12 4c1-1.5 4-1 4.5 1.5c2 0 2 2.5.5 2.5Z");
}
</style><path class="x18v7pctl"/>`,
		"fallback": "uix:baby-powder",
	});
}

export default Component;
