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
		"content": `<style>.o2mdkvagg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 5h6.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25h-6.5A2.25 2.25 0 0 1 2.5 7.25A2.25 2.25 0 0 1 4.75 5m5.5 9.5h9a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 19.25 19h-9A2.25 2.25 0 0 1 8 16.75a2.25 2.25 0 0 1 2.25-2.25m6.25-7.25h5M19.25 5l2.25 2.25l-2.25 2.25");
}
</style><path class="o2mdkvagg"/>`,
		"fallback": "uix:gantt-shift",
	});
}

export default Component;
