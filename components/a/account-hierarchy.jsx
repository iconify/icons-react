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
		"content": `<style>.rv3fe1bkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5h2a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 13 9.5h-2a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 11 2.5M5.25 15h2A1.75 1.75 0 0 1 9 16.75v3a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 5.25 15m11.5 0h2a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 15 19.75v-3A1.75 1.75 0 0 1 16.75 15M12 9.5v2.75M6.25 15v-1.25a1.5 1.5 0 0 1 1.5-1.5h8.5a1.5 1.5 0 0 1 1.5 1.5V15");
}
</style><path class="rv3fe1bkr"/>`,
		"fallback": "uix:account-hierarchy",
	});
}

export default Component;
