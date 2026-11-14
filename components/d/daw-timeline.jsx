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
		"content": `<style>.l2nl9cc0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3.5h5.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 9.75 7h-5.5A1.75 1.75 0 0 1 2.5 5.25A1.75 1.75 0 0 1 4.25 3.5m4.5 6.75h8.5A1.75 1.75 0 0 1 19 12a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 7 12a1.75 1.75 0 0 1 1.75-1.75M4.25 17h3A1.75 1.75 0 0 1 9 18.75a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 4.25 17m10 0h5.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 14.25 17M15 2.5v19");
}
</style><path class="l2nl9cc0v"/>`,
		"fallback": "uix:daw-timeline",
	});
}

export default Component;
