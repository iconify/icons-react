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
		"content": `<style>.yngku4bqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.5h2A1.75 1.75 0 0 1 8 4.25v2A1.75 1.75 0 0 1 6.25 8h-2A1.75 1.75 0 0 1 2.5 6.25v-2A1.75 1.75 0 0 1 4.25 2.5m8.5 0h2a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 14.75 8h-2A1.75 1.75 0 0 1 11 6.25v-2a1.75 1.75 0 0 1 1.75-1.75M4.25 11h2A1.75 1.75 0 0 1 8 12.75v2a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 4.25 11m8.5 0h2a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 11 14.75v-2A1.75 1.75 0 0 1 12.75 11M17 21.5l4.5-8");
}
</style><path class="yngku4bqz"/>`,
		"fallback": "uix:cidr-block",
	});
}

export default Component;
