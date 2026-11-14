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
		"content": `<style>.dkphmq6ld {
  d: path("M2.5 5.5H6V19h12V5.5h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nk6b1cbqk {
  d: path("M9.25 13.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m2.75 0h.01");
}
</style><g class="hntgybcog"><path class="dkphmq6ld"/><path class="nk6b1cbqk"/></g>`,
		"fallback": "uix:fiber-trench",
	});
}

export default Component;
