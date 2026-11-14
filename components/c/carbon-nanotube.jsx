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
		"content": `<style>.tn7mb8m9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 7 0 1 0 4 0a2 7 0 1 0-4 0m2-7h15m-15 14h15m0-14a2 7 0 0 1 0 14m-2.941-6.244l-.875 1.5a1.5 1.5 0 0 1-1.296.744h-1.776a1.5 1.5 0 0 1-1.296-.744l-.875-1.5a1.5 1.5 0 0 1 0-1.512l.875-1.5A1.5 1.5 0 0 1 12.612 9h1.776a1.5 1.5 0 0 1 1.296.744l.875 1.5a1.5 1.5 0 0 1 0 1.512");
}
</style><path class="tn7mb8m9g"/>`,
		"fallback": "uix:carbon-nanotube",
	});
}

export default Component;
