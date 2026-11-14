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
		"content": `<style>.j8f239kva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5c0-3.75 3.25-4.75 5.25-3.5c.75.5 1.75.5 2.5 0c2-1.25 5.25-.25 5.25 3.5c0 2.75-1.25 4.25-1.75 6.5L13 19.5c-.25 1.5-1.75 1.5-2 0l-.75-4c-.25-1.25-2.25-1.25-2.5 0l-.75 4c-.25 1.5-1.75 1.5-2 0L4.25 14c-.5-2.25-1.75-3.75-1.75-6.5m16.5 8q0 3 3 3q-3 0-3 3q0-3-3-3q3 0 3-3");
}
</style><path class="j8f239kva"/>`,
		"fallback": "uix:baby-first-tooth",
	});
}

export default Component;
