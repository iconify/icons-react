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
		"content": `<style>.p2-c6x-kl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5h18c0 5-4 8.5-9 8.5s-9-3.5-9-8.5M3 7h17M10 7a5.5 2.75 0 1 0 11 0a5.5 2.75 0 1 0-11 0");
}
</style><path class="p2-c6x-kl"/>`,
		"fallback": "uix:batch-recipe",
	});
}

export default Component;
