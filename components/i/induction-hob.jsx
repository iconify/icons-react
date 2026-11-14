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
		"content": `<style>.fb_3xub7x {
  d: path("M5.5 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m5.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m6-2.5l2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pwkp65gco {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 6 3");
}
</style><g class="hntgybcog"><path class="pwkp65gco"/><path class="fb_3xub7x"/></g>`,
		"fallback": "uix:induction-hob",
	});
}

export default Component;
