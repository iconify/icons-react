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
		"content": `<style>.vpuz6eblv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.5A2.25 2.25 0 0 1 7 4.25a2.5 2.5 0 0 1 4.5 0a2 2 0 0 1 2 3.25Zm.5 0v14h14.5v-2.25c0-1.75-.75-2.75-2.5-3.5L13 14V7.5m-8 3h8");
}
</style><path class="vpuz6eblv"/>`,
		"fallback": "uix:beer-boot",
	});
}

export default Component;
