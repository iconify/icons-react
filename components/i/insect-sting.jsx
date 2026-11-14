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
		"content": `<style>.absn4jb2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12L14 9l1.75-1l-3 5l-.75 2l-.75-2l-3-5L10 9Zm6 15.25l-1.25 1.75a1.5 1.5 0 1 0 2.5 0Z");
}
</style><path class="absn4jb2x"/>`,
		"fallback": "uix:insect-sting",
	});
}

export default Component;
