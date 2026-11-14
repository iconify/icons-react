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
		"content": `<style>.phzxm6a9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12A3.25 3.25 0 0 1 7 6a4.5 4.5 0 0 1 8.5 0a3.25 3.25 0 0 1 1 6Zm5 0l-3 4.5H12L9.5 21m9-7c2 1.5 2.75 3 2.75 4.5a2.75 2.75 0 0 1-5.5 0c0-1 .5-1.75 1-2.5c.25 1.25.75 1.75 1.25 2c.5-1.25.25-2.75.5-4");
}
</style><path class="phzxm6a9b"/>`,
		"fallback": "uix:dry-thunderstorm",
	});
}

export default Component;
