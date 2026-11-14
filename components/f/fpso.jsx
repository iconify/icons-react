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
		"content": `<style>.e5-5qgbku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19l-2 4h-15Zm2 0V9.25a2.25 2.25 0 0 1 4.5 0V12m2.75 0V9.25a2.25 2.25 0 0 1 4.5 0V12M19 12V4.5M2.5 20q2.25-2.25 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="e5-5qgbku"/>`,
		"fallback": "uix:fpso",
	});
}

export default Component;
