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
		"content": `<style>.su6il0reh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3v18m0-7h15m-15-5.5h3m-3 11h3m7-8.5V3.5M11 7l3.5-3.5L18 7");
}
</style><path class="su6il0reh"/>`,
		"fallback": "uix:flight-level",
	});
}

export default Component;
