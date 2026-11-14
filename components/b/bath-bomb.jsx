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
		"content": `<style>.v-fg9axpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11.25a6 6 0 1 0 12 0a6 6 0 1 0-12 0M3 21q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0M18 3.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M15 2.5h.01");
}
</style><path class="v-fg9axpu"/>`,
		"fallback": "uix:bath-bomb",
	});
}

export default Component;
