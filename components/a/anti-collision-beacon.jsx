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
		"content": `<style>.w9n4lfdgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 16v-4a4 4 0 0 1 8 0v4Zm-.75 0h9.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 7.25 16M12 2.5v2m-7 1L6.5 7M19 5.5L17.5 7m-15 5h2m15 0h2");
}
</style><path class="w9n4lfdgz"/>`,
		"fallback": "uix:anti-collision-beacon",
	});
}

export default Component;
