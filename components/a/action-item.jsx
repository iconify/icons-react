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
		"content": `<style>.c5kihbcac {
  d: path("m5.25 12.25l2 2L10 10.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xspg0zbxa {
  d: path("M6 6.75h3.5a3.5 3.5 0 0 1 3.5 3.5v3.5a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-3.5A3.5 3.5 0 0 1 6 6.75M16 12h5.5");
}
</style><g class="hntgybcog"><path class="xspg0zbxa"/><path class="c5kihbcac"/></g>`,
		"fallback": "uix:action-item",
	});
}

export default Component;
