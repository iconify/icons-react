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
		"content": `<style>.zn5ruiv1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.738 21H2.5v-9.5L8 15v-3.5l4.793 3.05m.707-.712V3H18v9.762M16 21h3.5a2 2 0 0 0 .25-4a3 3 0 0 0-5.5.75A1.75 1.75 0 0 0 16 21");
}
</style><path class="zn5ruiv1s"/>`,
		"fallback": "uix:factory-co2",
	});
}

export default Component;
