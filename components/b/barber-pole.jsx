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
		"content": `<style>.yqiup0esp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.875 3h6.25A1.375 1.375 0 0 1 16.5 4.375a1.375 1.375 0 0 1-1.375 1.375h-6.25A1.375 1.375 0 0 1 7.5 4.375A1.375 1.375 0 0 1 8.875 3M10.5 5.75h3a1.5 1.5 0 0 1 1.5 1.5v9.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-9.5a1.5 1.5 0 0 1 1.5-1.5m-1.625 12.5h6.25a1.375 1.375 0 0 1 1.375 1.375A1.375 1.375 0 0 1 15.125 21h-6.25A1.375 1.375 0 0 1 7.5 19.625a1.375 1.375 0 0 1 1.375-1.375M9 9.5l6-3m-6 7l6-3m-6 7l6-3");
}
</style><path class="yqiup0esp"/>`,
		"fallback": "uix:barber-pole",
	});
}

export default Component;
