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
		"content": `<style>.mr0u44buk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5v-1a1.75 1.75 0 1 0-1.75-1.75M12.81 15H3.5c0-3 4-5 8.5-6.5c3.413 1.138 6.538 2.563 7.849 4.494M15 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m.5-2.75h.01m4.99 0h.01");
}
</style><path class="mr0u44buk"/>`,
		"fallback": "uix:hanger-kids",
	});
}

export default Component;
