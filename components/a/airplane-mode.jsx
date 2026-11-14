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
		"content": `<style>.ibnl2ab0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c1 0 1.5 1 1.5 2v5L21 14v2l-7.5-2.25V18l2.5 1.75v1.75l-4-1.25l-4 1.25v-1.75L10.5 18v-4.25L3 16v-2l7.5-4.5v-5c0-1 .5-2 1.5-2");
}
</style><path class="ibnl2ab0p"/>`,
		"fallback": "uix:airplane-mode",
	});
}

export default Component;
