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
		"content": `<style>.ii_su9uev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6.75a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 18.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-5.75-8.5L6.75 16m7-6.25l3.5 6.25M8 18.25h8");
}
</style><path class="ii_su9uev"/>`,
		"fallback": "uix:infra-graph",
	});
}

export default Component;
