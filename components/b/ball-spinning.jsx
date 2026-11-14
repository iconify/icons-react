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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nwrftd82o {
  d: path("M5.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.v3yg5zbbs {
  d: path("M8.5 6.5q2.5 5.5 0 11m7-11q-2.5 5.5 0 11m-6.749 3.427A9.5 9.5 0 0 1 3.073 8.751m12.176-5.678a9.5 9.5 0 0 1 5.678 12.176");
}
</style><g class="hntgybcog"><path class="nwrftd82o"/><path class="v3yg5zbbs"/></g>`,
		"fallback": "uix:ball-spinning",
	});
}

export default Component;
