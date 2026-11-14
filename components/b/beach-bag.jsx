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
		"content": `<style>.rri0agb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9h14l-1 11.5H6Zm3.5 0V6.5a3.5 3.5 0 0 1 7 0V9M6 14.5h12");
}
</style><path class="rri0agb9y"/>`,
		"fallback": "uix:beach-bag",
	});
}

export default Component;
