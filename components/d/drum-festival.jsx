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
		"content": `<style>.jekvxqptd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 11c0 3.5 4.5 4.5 4.5 6.5l-1.5 4h7l-1.5-4c0-2 4.5-3 4.5-6.5m-14 0h15M5 2.5L14.5 8M19 2.5L9.5 8");
}
</style><path class="jekvxqptd"/>`,
		"fallback": "uix:drum-festival",
	});
}

export default Component;
