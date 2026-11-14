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
		"content": `<style>.nqbnngayo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.5h2.5A1.75 1.75 0 0 1 15 4.25v1A1.75 1.75 0 0 1 13.25 7h-2.5A1.75 1.75 0 0 1 9 5.25v-1a1.75 1.75 0 0 1 1.75-1.75m-6.5 14.25h1A1.75 1.75 0 0 1 7 18.5v1a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 2.5 19.5v-1a1.75 1.75 0 0 1 1.75-1.75m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 19.5v-1a1.75 1.75 0 0 1 1.75-1.75M12 7v9.75m-7.25 0V12h14.5v4.75");
}
</style><path class="nqbnngayo"/>`,
		"fallback": "uix:goal-tree",
	});
}

export default Component;
