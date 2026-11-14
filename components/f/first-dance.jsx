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
		"content": `<style>.gd4fq9skh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 6 8m7.5 0A2.25 2.25 0 1 0 18 8a2.25 2.25 0 1 0-4.5 0M3 20.5c0-4 2.5-7 6-7c2 0 3 1.5 3 3.5m0 0c0-.766.147-1.459.44-2.022M18 21.25l-2.75-3C14.25 17 15 15 16.5 15c.75 0 1.25.5 1.5 1c.25-.5.75-1 1.5-1c1.5 0 2.25 2 1.25 3.25Z");
}
</style><path class="gd4fq9skh"/>`,
		"fallback": "uix:first-dance",
	});
}

export default Component;
