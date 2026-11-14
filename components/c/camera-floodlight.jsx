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
		"content": `<style>.fabpzceyu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 3.5h11.5a2.75 2.75 0 0 1 2.75 2.75A2.75 2.75 0 0 1 17.75 9H6.25A2.75 2.75 0 0 1 3.5 6.25A2.75 2.75 0 0 1 6.25 3.5M8 16.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M6.5 12L5 15.5M17.5 12l1.5 3.5m-7 1h.01");
}
</style><path class="fabpzceyu"/>`,
		"fallback": "uix:camera-floodlight",
	});
}

export default Component;
