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
		"content": `<style>.bk0cr9b1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 7h10.25a4.375 4.375 0 0 1 4.375 4.375v1.25A4.375 4.375 0 0 1 17.125 17H6.875A4.375 4.375 0 0 1 2.5 12.625v-1.25A4.375 4.375 0 0 1 6.875 7M8.75 7v10m6.5-10v10");
}
</style><path class="bk0cr9b1s"/>`,
		"fallback": "uix:button-group",
	});
}

export default Component;
