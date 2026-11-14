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
		"content": `<style>.vg0__kbzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M9 9l11 11M4 20L16 8l1.75-1.75c1.5-1.5.75-3.5-1-3");
}
</style><path class="vg0__kbzf"/>`,
		"fallback": "uix:dental-tools-set",
	});
}

export default Component;
