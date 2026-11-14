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
		"content": `<style>.hnwacdcat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 20.5c0-3.75 2.75-6 6.5-6c.893 0 1.73.128 2.486.373M18 21l-2.75-2.75c-1-1-1-2.75.25-3.5c1-.6 2-.15 2.5.75c.5-.9 1.5-1.35 2.5-.75c1.25.75 1.25 2.5.25 3.5Z");
}
</style><path class="hnwacdcat"/>`,
		"fallback": "uix:caretaker",
	});
}

export default Component;
