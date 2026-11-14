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
		"content": `<style>.x6_7sks3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 6h11v10a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2Zm1 0V4.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1V6m1 7.5h3.5V16m-12.5 2l-1 3h9l-1-3");
}
</style><path class="x6_7sks3h"/>`,
		"fallback": "uix:drink-dispenser",
	});
}

export default Component;
