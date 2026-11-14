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
		"content": `<style>.kncoaw41v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 4.5l8 7.5l-8 7.5M3 12h17.5M17 8.5l3.5 3.5l-3.5 3.5");
}
</style><path class="kncoaw41v"/>`,
		"fallback": "uix:aggregator",
	});
}

export default Component;
