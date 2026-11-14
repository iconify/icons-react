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
		"content": `<style>.wyo7z8nfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4h1A3.5 3.5 0 0 1 12 7.5v9A3.5 3.5 0 0 1 8.5 20h-1A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4m9.75 0za2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5v-11a2.5 2.5 0 0 1 2.5-2.5M8 8h.01");
}
</style><path class="wyo7z8nfc"/>`,
		"fallback": "uix:door-sensor-closed",
	});
}

export default Component;
