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

.mub6d7n-q {
  d: path("M10.5 9.5v-2a1.5 1.5 0 0 1 3 0v2m-4.75 0v7a1.5 1.5 0 0 0 1.5 1.5h3.5a1.5 1.5 0 0 0 1.5-1.5v-7m-3 3.75h3");
}

.xkksh40dz {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M8 9.5h8");
}
</style><g class="hntgybcog"><path class="xkksh40dz"/><path class="mub6d7n-q"/></g>`,
		"fallback": "uix:baby-on-board-badge",
	});
}

export default Component;
