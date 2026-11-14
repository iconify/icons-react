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
		"content": `<style>.y60muabbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-3.5 12c0-3 3-5.5 6.5-5.5s6.5 2.5 6.5 5.5m-16-15a2 2 0 1 0 4 0a2 2 0 1 0-4 0m15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 14a4 4 0 0 1 4-3.75m15 3.75a4 4 0 0 0-4-3.75");
}
</style><path class="y60muabbg"/>`,
		"fallback": "uix:account-team",
	});
}

export default Component;
