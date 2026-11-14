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
		"content": `<style>.yv8ws-b8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7.5c2.5-3.75 8.5-4 11.5-1l4-2.5v7l-4-2.5c-3 3-9 2.75-11.5-1m.25 6.5h15.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 19.75 20H4.25a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 4.25 14M6 14v2.5M9.5 14v3.5M13 14v2.5m3.5-2.5v3.5");
}
</style><path class="yv8ws-b8o"/>`,
		"fallback": "uix:fish-measure",
	});
}

export default Component;
