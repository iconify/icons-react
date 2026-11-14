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
		"content": `<style>.ug5wo8v7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16v-5c0-2.5 1.5-4 4-4c1-1.5 3-1.5 4 0l10-2c1-.25 1.25 1.25.5 1.75l-1.75 1l-.75 2.5l-.75-1.5L10.5 13l4.25 1.75l.75-2l.75 2.75l4.75 2c.75.5.5 2-.5 1.75L5 19c-1.5 0-2.5-1.25-2.5-3m5.75-7h.01");
}
</style><path class="ug5wo8v7g"/>`,
		"fallback": "uix:alligator",
	});
}

export default Component;
