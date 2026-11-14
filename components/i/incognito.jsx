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
		"content": `<style>.zr-i3abmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18M5.5 11l2-6.5c.25-.75 1-1 1.75-.75L12 5l2.75-1.25c.75-.25 1.5 0 1.75.75l2 6.5M4.75 16.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m9 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-3.5 0c1-.75 2.5-.75 3.5 0");
}
</style><path class="zr-i3abmk"/>`,
		"fallback": "uix:incognito",
	});
}

export default Component;
