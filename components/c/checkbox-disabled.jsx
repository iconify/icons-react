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
		"content": `<style>.knwcy4b3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.375 4h7.25A4.375 4.375 0 0 1 20 8.375v7.25A4.375 4.375 0 0 1 15.625 20h-7.25A4.375 4.375 0 0 1 4 15.625v-7.25A4.375 4.375 0 0 1 8.375 4M8 16l8-8");
}
</style><path class="knwcy4b3a"/>`,
		"fallback": "uix:checkbox-disabled",
	});
}

export default Component;
