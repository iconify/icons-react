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
		"content": `<style>.lg0p5jhwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.472 21H4.5c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.651 0 1.267.069M7 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM14.25 21h7.5m-6.25 0a2.5 2.5 0 0 1 5 0M18 14.5v2m-3.5-.25l1.25 1.25m5.75-1.25l-1.25 1.25");
}
</style><path class="lg0p5jhwm"/>`,
		"fallback": "uix-sharp:daily-active-users",
	});
}

export default Component;
