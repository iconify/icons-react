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
		"content": `<style>.ezi1kwbir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4h7l2 1.5v5L14 12H7a4 4 0 0 1 0-8m1.25 8zA1.75 1.75 0 0 1 10 13.75v5a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 8.25 12M18.5 6.5q.75-1 1.5 0t1.5 0m-3 3q.75-1 1.5 0t1.5 0");
}
</style><path class="ezi1kwbir"/>`,
		"fallback": "uix:hair-dryer-hot",
	});
}

export default Component;
