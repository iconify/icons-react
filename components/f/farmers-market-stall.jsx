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
		"content": `<style>.c183uljhx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l1.5-5h15L21 9Zm0 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M5 12v8.5M19 12v8.5M9.75 15h4.5A1.75 1.75 0 0 1 16 16.75v2a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 18.75v-2A1.75 1.75 0 0 1 9.75 15");
}
</style><path class="c183uljhx"/>`,
		"fallback": "uix:farmers-market-stall",
	});
}

export default Component;
