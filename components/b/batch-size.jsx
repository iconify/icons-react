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
		"content": `<style>.ev672hbut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h8.5A1.75 1.75 0 0 1 15 4.5v.75A1.75 1.75 0 0 1 13.25 7h-8.5A1.75 1.75 0 0 1 3 5.25V4.5a1.75 1.75 0 0 1 1.75-1.75m0 7.25h8.5A1.75 1.75 0 0 1 15 11.75v.75a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 3 12.5v-.75A1.75 1.75 0 0 1 4.75 10m0 7.25h8.5A1.75 1.75 0 0 1 15 19v.75a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 3 19.75V19a1.75 1.75 0 0 1 1.75-1.75M18.5 2.75h2V21.5h-2");
}
</style><path class="ev672hbut"/>`,
		"fallback": "uix:batch-size",
	});
}

export default Component;
