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
		"content": `<style>.k9tc5wpcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11h12M5 11L4 3.5M5 11l12 9.5m0-9.5L5 20.5m-1-17h8.5");
}
</style><path class="k9tc5wpcr"/>`,
		"fallback": "uix:fishing-chair",
	});
}

export default Component;
