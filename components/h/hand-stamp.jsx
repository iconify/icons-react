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
		"content": `<style>.d2ifryb6c {
  d: path("M9.25 6.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lz_3gvb7x {
  d: path("M11.75 9.5h.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5m-5 4h10.5A1.75 1.75 0 0 1 19 15.25A1.75 1.75 0 0 1 17.25 17H6.75A1.75 1.75 0 0 1 5 15.25a1.75 1.75 0 0 1 1.75-1.75M3 20h18");
}
</style><g class="hntgybcog"><path class="d2ifryb6c"/><path class="lz_3gvb7x"/></g>`,
		"fallback": "uix:hand-stamp",
	});
}

export default Component;
