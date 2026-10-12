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
		"content": `<style>.e5q4-w-rc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 17.25a4 4 0 0 1 8 0ZM17 3a3 3 0 0 0 4 4a4 4 0 1 1-4-4M2.75 17.25h18.5M7.5 20.75h9m-10-14.5L7 7.5l1.25.5L7 8.5l-.5 1.25L6 8.5L4.75 8L6 7.5Z");
}
</style><path class="e5q4-w-rc"/>`,
		"fallback": "iconoven:dusk",
	});
}

export default Component;
