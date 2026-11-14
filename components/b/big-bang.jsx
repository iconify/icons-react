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
		"content": `<style>.oxnjmdigm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m7 1.75l4.25 1.5M11.5 17l-.25 2.5m-3.5-5l-4 2.25M8 9.25l-2.25-1.5M12 7V2.5m4 6.75l2.25-1.5m-1 11.5h.01m-13.76-8h.01m12.24-7h.01");
}
</style><path class="oxnjmdigm"/>`,
		"fallback": "uix:big-bang",
	});
}

export default Component;
