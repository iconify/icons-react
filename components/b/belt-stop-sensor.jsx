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
		"content": `<style>.tp21v7bck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.75h9a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5m1.75-7.5h2A1.75 1.75 0 0 1 10.5 8v4a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 5 12V8a1.75 1.75 0 0 1 1.75-1.75M19 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1.5 1.5v7.75M13.25 9.5h3M5.5 16.25h.01m7.99 0h.01");
}
</style><path class="tp21v7bck"/>`,
		"fallback": "uix:belt-stop-sensor",
	});
}

export default Component;
