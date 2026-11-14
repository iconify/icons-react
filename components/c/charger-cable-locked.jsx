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
		"content": `<style>.tfzn_9bze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7H13v3a4.25 4.25 0 0 1-8.5 0Zm2-4v4M11 3v4m-2.25 7.25v7.25m8-4h2.5A1.75 1.75 0 0 1 21 19.25v.25a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.5v-.25a1.75 1.75 0 0 1 1.75-1.75m-.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="tfzn_9bze"/>`,
		"fallback": "uix:charger-cable-locked",
	});
}

export default Component;
