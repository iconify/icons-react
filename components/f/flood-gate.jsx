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
		"content": `<style>.l4yl3g7ii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19M8.75 4h6.5A1.75 1.75 0 0 1 17 5.75v5a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 7 10.75v-5A1.75 1.75 0 0 1 8.75 4M7 8.25h10M7 17q2.5-2 5 0t5 0");
}
</style><path class="l4yl3g7ii"/>`,
		"fallback": "uix:flood-gate",
	});
}

export default Component;
