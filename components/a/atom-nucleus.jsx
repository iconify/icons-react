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
		"content": `<style>.e6g_1ypro {
  d: path("M7.5 8.25a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rcijpqbmn {
  d: path("M3 16a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="e6g_1ypro"/><path class="rcijpqbmn"/></g>`,
		"fallback": "uix:atom-nucleus",
	});
}

export default Component;
