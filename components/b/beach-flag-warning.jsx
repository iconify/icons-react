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
		"content": `<style>.rzaqk3bzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5V21M7.75 4.5h8.5A1.75 1.75 0 0 1 18 6.25v4.5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 10.75v-4.5A1.75 1.75 0 0 1 7.75 4.5M3 21h18");
}
</style><path class="rzaqk3bzr"/>`,
		"fallback": "uix:beach-flag-warning",
	});
}

export default Component;
