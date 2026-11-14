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
		"content": `<style>.m46x7obaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.061 7.561l3.378 3.378a1.5 1.5 0 0 1 0 2.122l-3.378 3.378a1.5 1.5 0 0 1-2.122 0l-3.378-3.378a1.5 1.5 0 0 1 0-2.122l3.378-3.378a1.5 1.5 0 0 1 2.122 0M2.5 12h5.25M5 9.25L7.75 12L5 14.75");
}
</style><path class="m46x7obaw"/>`,
		"fallback": "uix:base-steal",
	});
}

export default Component;
