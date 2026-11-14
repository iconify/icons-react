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
		"content": `<style>.zsapitu3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.999 2.5h1.002a1.75 1.75 0 0 1 1.735 1.981l-.538 4.032A1.71 1.71 0 0 1 10.5 10a1.71 1.71 0 0 1-1.698-1.487l-.538-4.032A1.75 1.75 0 0 1 9.999 2.5M4 12.5h13.5A1.5 1.5 0 0 1 19 14v4.5h-3V16H4ZM9.5 10v2.5m2-2.5v2.5m6 8.5h.01");
}
</style><path class="zsapitu3w"/>`,
		"fallback": "uix:beer-tap",
	});
}

export default Component;
