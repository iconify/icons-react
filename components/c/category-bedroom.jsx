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
		"content": `<style>.jmikdmb8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19V8m0 7h18v4m0-4v-3a2 2 0 0 0-2-2h-8v5m-4.5-5h1A1.5 1.5 0 0 1 9 11.5A1.5 1.5 0 0 1 7.5 13h-1A1.5 1.5 0 0 1 5 11.5A1.5 1.5 0 0 1 6.5 10");
}
</style><path class="jmikdmb8q"/>`,
		"fallback": "uix:category-bedroom",
	});
}

export default Component;
