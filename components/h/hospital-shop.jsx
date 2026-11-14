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
		"content": `<style>.c0d3gekni {
  d: path("M11.466 18.75H5c-1.1 0-1.85-.75-1.75-1.75L4 7.5h10.5l.354 4.486M6.75 7.5v-2c0-1.75 1.25-3 2.5-3s2.5 1.25 2.5 3v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0q0gac6b {
  fill: currentColor;
  d: path("M16.5 14.25h3v2.25h2.25v3H19.5v2.25h-3V19.5h-2.25v-3h2.25Z");
}
</style><g class="hntgybcog"><path class="c0d3gekni"/><path class="n0q0gac6b"/></g>`,
		"fallback": "uix:hospital-shop",
	});
}

export default Component;
