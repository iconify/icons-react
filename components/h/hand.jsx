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
		"content": `<style>.xbtxx8den {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5V19l-3.25-4.75a1.5 1.5 0 0 1 2.5-1.75L8.5 14V5.5a1.5 1.5 0 0 1 3 0V11V4a1.5 1.5 0 0 1 3 0v7v-5.5a1.5 1.5 0 0 1 3 0v6V8a1.5 1.5 0 0 1 3 0v7c0 3-2 4.5-3.5 4.5v2");
}
</style><path class="xbtxx8den"/>`,
		"fallback": "uix:hand",
	});
}

export default Component;
