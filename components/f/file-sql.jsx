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

.vjcqfytci {
  d: path("M8.25 12.75v4.5a3.75 1.5 0 0 0 7.5 0v-4.5");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}

.ya1t67bfd {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8.25 12.75a3.75 1.5 0 1 0 7.5 0a3.75 1.5 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="ya1t67bfd"/><path class="vjcqfytci"/></g>`,
		"fallback": "uix:file-sql",
	});
}

export default Component;
