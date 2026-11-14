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
		"content": `<style>.j6jrwpzlb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3L3 5.75L4.75 11L7 10.25V21h10V10.25l2.25.75L21 5.75L15.5 3L12 6.5ZM7 13.5h10M7 17.25h10");
}
</style><path class="j6jrwpzlb"/>`,
		"fallback": "uix:away-kit",
	});
}

export default Component;
