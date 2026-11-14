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
		"content": `<style>.jas6sbisb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5q3 3 6 0L21.5 7l-2 4.5l-2-1v10h-11v-10l-2 1l-2-4.5ZM6.5 5v5.5m11-5.5v5.5");
}
</style><path class="jas6sbisb"/>`,
		"fallback": "uix:casual-attire",
	});
}

export default Component;
