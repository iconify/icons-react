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
		"content": `<style>.w1jtzdnst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.237 7.737l3.026 3.026a1.75 1.75 0 0 1 0 2.474l-3.026 3.026a1.75 1.75 0 0 1-2.474 0l-3.026-3.026a1.75 1.75 0 0 1 0-2.474l3.026-3.026a1.75 1.75 0 0 1 2.474 0");
}
</style><path class="w1jtzdnst"/>`,
		"fallback": "uix:diamond-small",
	});
}

export default Component;
