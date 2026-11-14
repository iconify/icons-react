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
		"content": `<style>.vz_-yibdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M7.5 20c0-3.25 2-5.25 4.5-5.25s4.5 2 4.5 5.25M2.75 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 20c0-3 1-5 2.5-5.5M21.5 20c0-3-1-5-2.5-5.5");
}
</style><path class="vz_-yibdn"/>`,
		"fallback": "uix:class-action",
	});
}

export default Component;
