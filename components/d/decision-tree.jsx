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
		"content": `<style>.tsbs5xbyx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.5h2.5A1.75 1.75 0 0 1 15 4.25v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 4.75v-.5a1.75 1.75 0 0 1 1.75-1.75m1.25 4V9m1.061 1.061l.878.878a1.5 1.5 0 0 1 0 2.122l-.878.878a1.5 1.5 0 0 1-2.122 0l-.878-.878a1.5 1.5 0 0 1 0-2.122l.878-.878a1.5 1.5 0 0 1 2.122 0M5.5 17v-5H9m6 0h3.5v5M4.25 17h2.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 4.25 17m13 0h2.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 17.25 17");
}
</style><path class="tsbs5xbyx"/>`,
		"fallback": "uix:decision-tree",
	});
}

export default Component;
