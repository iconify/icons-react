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
		"content": `<style>.hmhntacir {
  d: path("M3 4h18m-9 0v3.5m-4 0h8a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 16v-5A3.5 3.5 0 0 1 8 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wepb94fmn {
  d: path("M8.75 13.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="hmhntacir"/><path class="wepb94fmn"/></g>`,
		"fallback": "uix:dashcam",
	});
}

export default Component;
