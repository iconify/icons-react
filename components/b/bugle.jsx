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
		"content": `<style>.b9z_t4bak {
  d: path("M5 14a5 4.5 0 1 0 10 0a5 4.5 0 1 0-10 0M3 8v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pehfr6elc {
  d: path("M3 9.5h11c3 0 5-1.75 7-3.5v7c-2-1.75-4-3.5-7-3.5");
}
</style><g class="hntgybcog"><path class="pehfr6elc"/><path class="b9z_t4bak"/></g>`,
		"fallback": "uix:bugle",
	});
}

export default Component;
