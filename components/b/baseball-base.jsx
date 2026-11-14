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
		"content": `<style>.ay2f4rb_p {
  d: path("M2.5 11v3l9.5 5l9.5-5v-3M12 16v3");
}

.cwhhhxbuk {
  d: path("m5.022 9.673l6.279-3.305a1.5 1.5 0 0 1 1.398 0l6.279 3.305a1.5 1.5 0 0 1 0 2.654l-6.279 3.305a1.5 1.5 0 0 1-1.398 0l-6.279-3.305a1.5 1.5 0 0 1 0-2.654");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cwhhhxbuk"/><path class="ay2f4rb_p"/></g>`,
		"fallback": "uix:baseball-base",
	});
}

export default Component;
