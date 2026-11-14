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
		"content": `<style>.drn68mb1l {
  d: path("M5.5 6h13A3.5 3.5 0 0 1 22 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 14.5v-5A3.5 3.5 0 0 1 5.5 6");
}

.dzos2j--i {
  d: path("m2 15.5l5-5l7.5 7.5m.5-8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="drn68mb1l"/><path class="dzos2j--i"/></g>`,
		"fallback": "uix:image-landscape",
	});
}

export default Component;
