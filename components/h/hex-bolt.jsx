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
		"content": `<style>.cf1xi4bge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 2.5h4.5A1.75 1.75 0 0 1 16 4.25v.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 4.75v-.5A1.75 1.75 0 0 1 9.75 2.5m.25 4v13a2 2 0 0 0 4 0v-13m-4 4l4-1m-4 4l4-1m-4 4l4-1");
}
</style><path class="cf1xi4bge"/>`,
		"fallback": "uix:hex-bolt",
	});
}

export default Component;
