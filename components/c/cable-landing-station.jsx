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
		"content": `<style>.rbfn8bcmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.25 13.5h7.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 19.75 19h-7.5a1.75 1.75 0 0 1-1.75-1.75v-2a1.75 1.75 0 0 1 1.75-1.75M13 12V9.621a1.5 1.5 0 0 1 .439-1.06l2-2a1.5 1.5 0 0 1 2.122 0l2 2A1.5 1.5 0 0 1 20 9.621V12a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 12m-10.5-.5q1.5-1.5 3 0t3 0m-6 5.5h8");
}
</style><path class="rbfn8bcmi"/>`,
		"fallback": "uix:cable-landing-station",
	});
}

export default Component;
