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
		"content": `<style>.e4w5d5s1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9.75a6 6 0 1 0 4 0V6.5l1-4H9l1 4Zm0-3.25h4");
}
</style><path class="e4w5d5s1h"/>`,
		"fallback": "uix:cork-flask",
	});
}

export default Component;
