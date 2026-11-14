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
		"content": `<style>.g-i3wkb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5za2.25 2.25 0 0 1 2.25 2.25v2.5A2.25 2.25 0 0 1 7 9.5a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 7 2.5m-1.75 7h3.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 0 12.25 15h1.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 13.75 21h-8.5a1.75 1.75 0 0 1-1.75-1.75v-8A1.75 1.75 0 0 1 5.25 9.5m13.25 7l3-1.5m-3 4.5l3 1.5");
}
</style><path class="g-i3wkb7s"/>`,
		"fallback": "uix:inhaler-reliever",
	});
}

export default Component;
