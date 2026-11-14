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
		"content": `<style>.f47e_mbtf {
  d: path("M3.5 16.5v-12a2 2 0 0 1 2-2h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i3uh7ybck {
  d: path("M11.5 6.5H18a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5h-6.5A3.5 3.5 0 0 1 8 18v-8a3.5 3.5 0 0 1 3.5-3.5");
}

.xqdtbhbrm {
  d: path("M13 11.5L10.75 14L13 16.5m3.5-5l2.25 2.5l-2.25 2.5");
}
</style><g class="hntgybcog"><path class="f47e_mbtf"/><path class="i3uh7ybck"/><path class="xqdtbhbrm"/></g>`,
		"fallback": "uix:code-duplication",
	});
}

export default Component;
