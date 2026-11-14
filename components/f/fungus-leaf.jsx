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
		"content": `<style>.kjwiadb3b {
  d: path("M7.75 14a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm4.5-4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uuzph6jsw {
  d: path("M3.5 20.5c0-10.5 6.5-17 17-17c0 10.5-6.5 17-17 17Z");
}
</style><g class="ulnmmdpxh"><path class="uuzph6jsw"/><path class="kjwiadb3b"/></g>`,
		"fallback": "uix-sharp:fungus-leaf",
	});
}

export default Component;
