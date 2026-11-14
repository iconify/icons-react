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
		"content": `<style>.nvjxmqbjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4H18a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 18 14H8.5A3.5 3.5 0 0 1 5 10.5v-3A3.5 3.5 0 0 1 8.5 4M5 11H4q-1.5 0-1.5 1.5V18M8 11h10.5M11 17l-.75 3m5.25-3l.75 3");
}
</style><path class="nvjxmqbjv"/>`,
		"fallback": "uix:air-conditioner-split",
	});
}

export default Component;
