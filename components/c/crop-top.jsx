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
		"content": `<style>.ycjznbcns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5h2.5c0 5.5 7 5.5 7 0H18c0 3.5 1.5 5.5 2 6.5V19H4v-7.5c.5-1 2-3 2-6.5M4 16h16");
}
</style><path class="ycjznbcns"/>`,
		"fallback": "uix:crop-top",
	});
}

export default Component;
