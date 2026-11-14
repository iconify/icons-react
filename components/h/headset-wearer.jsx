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
		"content": `<style>.f-8ll5b1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5.75a5 5 0 0 1 8 0m-9 0h10a3 3 0 0 1 3 3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3a3 3 0 0 1 3-3m1 6a5 5 0 0 0 8 0M4.5 21c0-2.5 3.25-4 7.5-4s7.5 1.5 7.5 4");
}
</style><path class="f-8ll5b1o"/>`,
		"fallback": "uix:headset-wearer",
	});
}

export default Component;
