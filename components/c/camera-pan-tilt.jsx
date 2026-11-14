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
		"content": `<style>.gzoc8cc-l {
  d: path("M9.375 7.5h5.25a2.625 2.625 0 0 1 2.625 2.625v3.75a2.625 2.625 0 0 1-2.625 2.625h-5.25a2.625 2.625 0 0 1-2.625-2.625v-3.75A2.625 2.625 0 0 1 9.375 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w5b35db_y {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 9.5L2 12l2 2.5m16-5l2 2.5l-2 2.5M9.5 4.5l2.5-2l2.5 2m-5 15l2.5 2l2.5-2");
}
</style><g class="hntgybcog"><path class="gzoc8cc-l"/><path class="w5b35db_y"/></g>`,
		"fallback": "uix:camera-pan-tilt",
	});
}

export default Component;
