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
		"content": `<style>.xrnc0gbxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18m-3 0V3m-3 4h3M7.75 4h5.5A1.75 1.75 0 0 1 15 5.75v2.5A1.75 1.75 0 0 1 13.25 10h-5.5A1.75 1.75 0 0 1 6 8.25v-2.5A1.75 1.75 0 0 1 7.75 4M10 10h1a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-.5 2L7 17m4.5-5l2.5 5");
}
</style><path class="xrnc0gbxw"/>`,
		"fallback": "uix:enlarger",
	});
}

export default Component;
