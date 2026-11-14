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
		"content": `<style>.upqqzbb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m0-18h14.5L16 7.75l2.367 4.025M16.762 12H4m14 2.5V18m0 3h.01");
}
</style><path class="upqqzbb9e"/>`,
		"fallback": "uix:cheater-flag",
	});
}

export default Component;
