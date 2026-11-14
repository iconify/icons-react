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
		"content": `<style>.i1m5_dnjz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.769 16.057C10.451 17.61 7.386 18.5 3.5 18.5c0-10 4.5-15 15-15c0 3.989-.991 7.537-3.128 10.18M2.5 19.5L12 10m6 5v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="i1m5_dnjz"/>`,
		"fallback": "uix:first-frost",
	});
}

export default Component;
