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

.l1mcfkbwi {
  d: path("M8.5 15a3.5 7 0 1 0 7 0a3.5 7 0 1 0-7 0M5 15h14m-7-7V5.5m0 0q.75-3 4.5-3q-.75 3-4.5 3m0 0q-.75-3-4.5-3q.75 3 4.5 3");
}

.vopf8xhqz {
  d: path("M5 15a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="vopf8xhqz"/><path class="l1mcfkbwi"/></g>`,
		"fallback": "uix:earth-sprout",
	});
}

export default Component;
