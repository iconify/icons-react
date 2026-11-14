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
		"content": `<style>.akz_k5baa {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5V13a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V6.5A3.5 3.5 0 0 1 6 3m6 13.5V21m-4.5 0h9");
}

.g3n0adctf {
  fill: currentColor;
  d: path("M14.625 6h2.75A1.125 1.125 0 0 1 18.5 7.125a1.125 1.125 0 0 1-1.125 1.125h-2.75A1.125 1.125 0 0 1 13.5 7.125A1.125 1.125 0 0 1 14.625 6m0 5.25h2.75a1.125 1.125 0 0 1 1.125 1.125a1.125 1.125 0 0 1-1.125 1.125h-2.75a1.125 1.125 0 0 1-1.125-1.125a1.125 1.125 0 0 1 1.125-1.125");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mflwehbjm {
  d: path("M7.25 6h1.5a1.75 1.75 0 0 1 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-4A1.75 1.75 0 0 1 7.25 6");
}
</style><g class="hntgybcog"><path class="akz_k5baa"/><path class="mflwehbjm"/><path class="g3n0adctf"/></g>`,
		"fallback": "uix:dashboard-on-tv",
	});
}

export default Component;
