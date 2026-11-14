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
		"content": `<style>.c8vzhqb-a {
  d: path("M2.5 13V4.5a2 2 0 0 1 2-2H13");
}

.f0r-gub1r {
  d: path("M10 6.5h8a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5h-8A3.5 3.5 0 0 1 6.5 18v-8A3.5 3.5 0 0 1 10 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sxbsk4rmu {
  d: path("m12 11l-2.5 3l2.5 3m4-6l2.5 3l-2.5 3");
}
</style><g class="hntgybcog"><path class="c8vzhqb-a"/><path class="f0r-gub1r"/><path class="sxbsk4rmu"/></g>`,
		"fallback": "uix:code-copy",
	});
}

export default Component;
