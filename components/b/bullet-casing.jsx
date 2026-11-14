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
		"content": `<style>.bdc6qpfub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 9l-2 2.5V19h8v-7.5L14 9Zm0 0V6.5c0-2.25 1-4 2-4s2 1.75 2 4V9M8.25 19h7.5A1.25 1.25 0 0 1 17 20.25a1.25 1.25 0 0 1-1.25 1.25h-7.5A1.25 1.25 0 0 1 7 20.25A1.25 1.25 0 0 1 8.25 19");
}
</style><path class="bdc6qpfub"/>`,
		"fallback": "uix:bullet-casing",
	});
}

export default Component;
