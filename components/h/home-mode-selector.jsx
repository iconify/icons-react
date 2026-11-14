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
		"content": `<style>.vw-p4rb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 14.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0m6 0V11m0-7.25v2m-7.5 4.5l-1.75-1m16.75 1l1.75-1");
}
</style><path class="vw-p4rb6x"/>`,
		"fallback": "uix:home-mode-selector",
	});
}

export default Component;
