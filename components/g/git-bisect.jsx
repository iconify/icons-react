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
		"content": `<style>.du95kbf3a {
  d: path("M3.25 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m2.75 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.25 2.25L21.5 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wk2fr4bhm {
  d: path("M8 21.5V14c0-3-3-4-3-7.75M8 14c0-3 5-4 5-7.75");
}
</style><g class="hntgybcog"><path class="wk2fr4bhm"/><path class="du95kbf3a"/></g>`,
		"fallback": "uix:git-bisect",
	});
}

export default Component;
