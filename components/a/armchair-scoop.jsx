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

.k9nhtcbrf {
  d: path("M3.5 16v-6c0-4.5 4-6.5 8.5-6.5s8.5 2 8.5 6.5v6Z");
}

.s847vqb3y {
  d: path("M7.5 16v-3.5h9V16M5 16l-.5 4M19 16l.5 4");
}
</style><g class="hntgybcog"><path class="k9nhtcbrf"/><path class="s847vqb3y"/></g>`,
		"fallback": "uix:armchair-scoop",
	});
}

export default Component;
