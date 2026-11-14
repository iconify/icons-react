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
		"content": `<style>.s60_lqkqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5v16c4.75 0 8.5-3 8.5-8M6 11l7-3m-7 7l7-3");
}
</style><path class="s60_lqkqt"/>`,
		"fallback": "uix:currency-lira",
	});
}

export default Component;
