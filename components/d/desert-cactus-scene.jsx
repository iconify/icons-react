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
		"content": `<style>.ubvbofbvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21v-5.5H6A2.5 2.5 0 0 1 3.5 13V8.5a1.5 1.5 0 0 1 3 0v4H10v-8a2 2 0 0 1 4 0v6h3.5v-4a1.5 1.5 0 0 1 3 0V11a2.5 2.5 0 0 1-2.5 2.5h-4V21M3 21h18");
}
</style><path class="ubvbofbvh"/>`,
		"fallback": "uix:desert-cactus-scene",
	});
}

export default Component;
