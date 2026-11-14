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
		"content": `<style>.r1wbhob5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 13.25V5a1.5 1.5 0 0 1 3 0v6.5a1.25 1.25 0 0 1 2.5 0a1.25 1.25 0 0 1 2.5 0a1.25 1.25 0 0 1 2.5 0v4c0 3.3-2 5.5-5 5.5h-1.25C11 21 9.9 20.3 9 19l-4-5.25a1.5 1.5 0 0 1 2-2Z");
}
</style><path class="r1wbhob5i"/>`,
		"fallback": "uix:cursor-hand",
	});
}

export default Component;
