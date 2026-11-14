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
		"content": `<style>.dtk8pv8kh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10m-5 0v4.5m-.75 0h1.5a1.75 1.75 0 0 1 1.75 1.75v10A1.75 1.75 0 0 1 12.75 21h-1.5a1.75 1.75 0 0 1-1.75-1.75v-10a1.75 1.75 0 0 1 1.75-1.75M5 21h14");
}
</style><path class="dtk8pv8kh"/>`,
		"fallback": "uix:air-pump",
	});
}

export default Component;
