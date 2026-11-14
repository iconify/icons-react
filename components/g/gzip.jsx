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
		"content": `<style>.ny2b5db3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9h14.5A1.75 1.75 0 0 1 21 10.75v3a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 13.75v-3A1.75 1.75 0 0 1 4.75 9M3 11.75h18M12 2.5v3.75m-2.5-2.5l2.5 2.5l2.5-2.5M12 21.5v-3.25m-2.5 2.5l2.5-2.5l2.5 2.5");
}
</style><path class="ny2b5db3h"/>`,
		"fallback": "uix:gzip",
	});
}

export default Component;
