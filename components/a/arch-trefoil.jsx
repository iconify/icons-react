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

.tllw2iado {
  d: path("M4.5 21.5v-11a7.5 7.5 0 0 1 15 0v11M3 21.5h18");
}

.x4_79vbde {
  d: path("M9.75 9.5a2.5 2.5 0 1 1 4.5 0A2.5 2.5 0 1 1 12 13.25A2.5 2.5 0 1 1 9.75 9.5");
}
</style><g class="hntgybcog"><path class="tllw2iado"/><path class="x4_79vbde"/></g>`,
		"fallback": "uix:arch-trefoil",
	});
}

export default Component;
