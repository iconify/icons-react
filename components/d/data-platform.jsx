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
		"content": `<style>.e_1jcdcal {
  d: path("M6 5c0-1.4 2.7-2.5 6-2.5s6 1.1 6 2.5v9c0 1.4-2.7 2.5-6 2.5S6 15.4 6 14ZM3.875 18.75h16.25a1.375 1.375 0 0 1 1.375 1.375a1.375 1.375 0 0 1-1.375 1.375H3.875A1.375 1.375 0 0 1 2.5 20.125a1.375 1.375 0 0 1 1.375-1.375");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u07z_mbhy {
  d: path("M6 5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5M6 9.75c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5");
}
</style><g class="hntgybcog"><path class="e_1jcdcal"/><path class="u07z_mbhy"/></g>`,
		"fallback": "uix:data-platform",
	});
}

export default Component;
