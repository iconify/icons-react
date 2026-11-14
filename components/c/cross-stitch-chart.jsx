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
		"content": `<style>.spu-rhb7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5m5 0v17M3.5 12h17m-14-5.5l2.75 2.75m0-2.75L6.5 9.25m8.25 5.5l2.75 2.75m0-2.75l-2.75 2.75");
}
</style><path class="spu-rhb7v"/>`,
		"fallback": "uix:cross-stitch-chart",
	});
}

export default Component;
