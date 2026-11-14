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
		"content": `<style>.rsd1abbgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8h4.5v3c.75.5 1.25 1.5 1.25 3v3.5a4 4 0 0 1-8 0v-4c0-1.25 1-2.25 2.25-2.5Zm10 0h4.5v3c1.25.25 2.25 1.25 2.25 2.5v4a4 4 0 0 1-8 0V14c0-1.5.5-2.5 1.25-3ZM7 8l5-5.5L17 8M9 2.5h6");
}
</style><path class="rsd1abbgr"/>`,
		"fallback": "uix:boxing-gloves-hanging",
	});
}

export default Component;
