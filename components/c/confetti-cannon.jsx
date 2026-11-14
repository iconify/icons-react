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
		"content": `<style>.yuy5oxtxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.182 12.007l1.061 1.061a1.75 1.75 0 0 1 0 2.475l-4.95 4.95a1.75 1.75 0 0 1-2.475 0l-1.061-1.061a1.75 1.75 0 0 1 0-2.475l4.95-4.95a1.75 1.75 0 0 1 2.475 0M13 7l.75-3M16 10l3-.75M17.5 4.5h.01M20.5 13h.01M10 4h.01");
}
</style><path class="yuy5oxtxl"/>`,
		"fallback": "uix:confetti-cannon",
	});
}

export default Component;
