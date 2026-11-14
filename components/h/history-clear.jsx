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

.k2jw7rt-z {
  d: path("m2 9l3 3l3-3m2.5.5l5 5m0-5l-5 5");
}

.mk5xfob2d {
  d: path("M5 12a8 8 0 1 1 4 6.928");
}
</style><g class="hntgybcog"><path class="mk5xfob2d"/><path class="k2jw7rt-z"/></g>`,
		"fallback": "uix:history-clear",
	});
}

export default Component;
