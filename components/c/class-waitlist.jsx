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
		"content": `<style>.mtjr4183e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9h12a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 9M5 6h14M7.5 3h9");
}
</style><path class="mtjr4183e"/>`,
		"fallback": "uix:class-waitlist",
	});
}

export default Component;
