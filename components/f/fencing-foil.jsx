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
		"content": `<style>.x0eulsbfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 13.75L21 3M6 15.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m.75 1.75L3.5 20.5");
}
</style><path class="x0eulsbfk"/>`,
		"fallback": "uix:fencing-foil",
	});
}

export default Component;
