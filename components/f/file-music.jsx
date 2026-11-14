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
		"content": `<style>.a33mqj7mk {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5-1a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.a5tq5bc1s {
  d: path("M11 17v-5.5l5-1V16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="a33mqj7mk"/><path class="a5tq5bc1s"/></g>`,
		"fallback": "uix:file-music",
	});
}

export default Component;
