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
		"content": `<style>.e0ez1bc7e {
  d: path("M2.5 8.5h19c0 6-4.5 9.5-9.5 9.5s-9.5-3.5-9.5-9.5M4 6l3.5 2.5M20 6l-3.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7mfnnboa {
  d: path("m6 11.5l3 2.75l3-2.75l3 2.75l3-2.75");
}
</style><g class="hntgybcog"><path class="e0ez1bc7e"/><path class="v7mfnnboa"/></g>`,
		"fallback": "uix:empty-nest",
	});
}

export default Component;
