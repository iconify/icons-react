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
		"content": `<style>.eqv95cc-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.272 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.86 0 1.679.092 2.438.266M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m10.25 8h3a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 15 19.75v-3A1.75 1.75 0 0 1 16.75 15m1.5 0v6.5M15 18.25h6.5");
}
</style><path class="eqv95cc-k"/>`,
		"fallback": "uix:agent-data",
	});
}

export default Component;
