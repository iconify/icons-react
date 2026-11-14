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
		"content": `<style>.fd92bs6_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9 21.5V16H7.5v-3a2.75 2.75 0 0 1 2.75-2.75h3.5A2.75 2.75 0 0 1 16.5 13v3H15v5.5Zm3-5v5");
}
</style><path class="fd92bs6_s"/>`,
		"fallback": "uix:avatar-full-body",
	});
}

export default Component;
