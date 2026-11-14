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
		"content": `<style>.pk6hr2sys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9m7 7v3m-9 0h18M3 22h18M12 9h.01M12 9l3-3M5 9h2.5M7 4l1.75 1.75M12 2v2.5");
}
</style><path class="pk6hr2sys"/>`,
		"fallback": "uix:gas-pressure-gauge",
	});
}

export default Component;
