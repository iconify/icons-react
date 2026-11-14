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
		"content": `<style>.roj70bb5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 8h13.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 5.25 8m2.375 4.5h8.75A2.625 2.625 0 0 1 19 15.125v3.25A2.625 2.625 0 0 1 16.375 21h-8.75A2.625 2.625 0 0 1 5 18.375v-3.25A2.625 2.625 0 0 1 7.625 12.5M12 8v13m0-13c-1.5-3-5-5-5.25-2.25C6.6 7.25 9 8 12 8m0 0c1.5-3 5-5 5.25-2.25C17.4 7.25 15 8 12 8");
}
</style><path class="roj70bb5c"/>`,
		"fallback": "uix:gift",
	});
}

export default Component;
