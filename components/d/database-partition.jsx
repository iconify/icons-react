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

.i-7a-zb9i {
  d: path("M4 5.5v13a8 3 0 0 0 16 0v-13");
}

.l65rj2tze {
  d: path("M4 5.5a8 3 0 1 0 16 0a8 3 0 1 0-16 0");
}

.os46fqbjr {
  d: path("M4 12a8 3 0 0 0 16 0m-8-3.5v13");
}
</style><g class="hntgybcog"><path class="l65rj2tze"/><path class="i-7a-zb9i"/><path class="os46fqbjr"/></g>`,
		"fallback": "uix:database-partition",
	});
}

export default Component;
