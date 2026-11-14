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
		"content": `<style>.ijutezbuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.875 5.5l3.631-2.075a1.5 1.5 0 0 1 1.488 0L15.625 5.5a1.338 1.338 0 0 1-.664 2.5H7.539a1.338 1.338 0 0 1-.664-2.5M2.5 20.75H13m-7.5-10V18m5.5-7.25V18m5.5-7.25v1.8m-1.25 4.95a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="ijutezbuy"/>`,
		"fallback": "uix:courthouse-search",
	});
}

export default Component;
