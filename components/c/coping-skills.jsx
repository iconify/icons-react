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
		"content": `<style>.cgknkjbup {
  d: path("M8 21.5V17c-3.5-2-4.5-5.5-4-8c1-4.5 4.5-6.5 8.5-6.5c4.5 0 7 3.5 7 7L21 13h-1.5v3a2 2 0 0 1-2 2h-2v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mhh4t-boj {
  d: path("m11.5 14l-3-3a1.9 1.9 0 0 1 3-2.75a1.9 1.9 0 0 1 3 2.75Z");
}
</style><g class="hntgybcog"><path class="cgknkjbup"/><path class="mhh4t-boj"/></g>`,
		"fallback": "uix:coping-skills",
	});
}

export default Component;
