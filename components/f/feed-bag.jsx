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
		"content": `<style>.mgfbpl9wd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 7l-2 12.25a2 2 0 0 0 2 2.25h11a2 2 0 0 0 2-2.25L17.5 7M7.25 2.5h9.5A2.25 2.25 0 0 1 19 4.75A2.25 2.25 0 0 1 16.75 7h-9.5A2.25 2.25 0 0 1 5 4.75A2.25 2.25 0 0 1 7.25 2.5m4.75 16v-8m0 2.5l-2-2m2 2l2-2m-2 5.5l-2-2m2 2l2-2");
}
</style><path class="mgfbpl9wd"/>`,
		"fallback": "uix:feed-bag",
	});
}

export default Component;
