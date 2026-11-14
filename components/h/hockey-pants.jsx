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
		"content": `<style>.j3lrcilck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h14l1 13a1.5 1.5 0 0 1-1.5 1.5H14L12 11l-2 7.5H5.5A1.5 1.5 0 0 1 4 17Zm0 3.5h14");
}
</style><path class="j3lrcilck"/>`,
		"fallback": "uix:hockey-pants",
	});
}

export default Component;
