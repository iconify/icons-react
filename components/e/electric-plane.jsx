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
		"content": `<style>.cwcb6qb0j {
  d: path("M2.5 16h16.25a2.75 2.75 0 0 0 0-5.5H12l-3.5-8h-6Zm7.5 0l-2.5 4.5h2.75l4-4.5");
}

.hm15quftp {
  d: path("M6.5 4.75L5 7.25h2.75L6.25 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cwcb6qb0j"/><path class="hm15quftp"/></g>`,
		"fallback": "uix:electric-plane",
	});
}

export default Component;
