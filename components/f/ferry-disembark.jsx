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

.lj4d6jb7h {
  d: path("M18.75 7.75L17.5 13.5l-2 6m2-6l2.5 6");
}

.vvd375b3h {
  d: path("M2.5 12H14l-1.5 4.5H4Zm3.75-5.5h3.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 9.75 12h-3.5a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 6.25 6.5m11-.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="vvd375b3h"/><path class="lj4d6jb7h"/></g>`,
		"fallback": "uix:ferry-disembark",
	});
}

export default Component;
