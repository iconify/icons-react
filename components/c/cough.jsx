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
		"content": `<style>.e0lskccen {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 17.75V14.5C5 13 4 11 4 9c0-3.5 2.75-6 6-6s5.75 2 5.75 5.25L17 11c0 .5-.25 1-.75 1h-.5v.43m-.5 9.07c-1.25 0-1.5-1.75-.25-2c0-1.75 2-2.5 3-1.25c.75-1.5 3.25-1.25 3.25.75c.75.25.75 2.5-.5 2.5Zm-.75-5.75h.01m2.74-1h.01");
}
</style><path class="e0lskccen"/>`,
		"fallback": "uix:cough",
	});
}

export default Component;
