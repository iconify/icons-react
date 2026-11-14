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
		"content": `<style>.pjd3h4blm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.417 21.5H4V9l3-4.5v-2h8.5v2l3 4.5v3.483M4 9h14.5m0 6.25v6.5M15.75 17l5.5 3m-5.5 0l5.5-3");
}
</style><path class="pjd3h4blm"/>`,
		"fallback": "uix:dairy-fridge",
	});
}

export default Component;
