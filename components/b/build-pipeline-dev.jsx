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
		"content": `<style>.c049g2-zu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m7 0h1.5m-3.25 3l.75 1.25M5.5 10.25l-.75 1.25m-1-4.25h-1.5m3.25-3L4.75 3M9 4.25L9.75 3m3.5 13.75a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m6.5 1.75l1.25.75m-4.25 1v1.5m-3-3.25l-1.25.75M13.75 15l-1.25-.75m4.25-1v-1.5m3 3.25l1.25-.75m-8.75-7h4.5v4.5");
}
</style><path class="c049g2-zu"/>`,
		"fallback": "uix:build-pipeline-dev",
	});
}

export default Component;
