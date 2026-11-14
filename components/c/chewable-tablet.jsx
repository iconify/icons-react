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
		"content": `<style>.a9r_v3b3b {
  d: path("M15.25 3.25a8 8 0 1 0 4.25 4.5a3.5 3.5 0 0 1-4.25-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.okohc-b1j {
  d: path("M4 10.5v3a8 8 0 0 0 16 0v-3");
}
</style><g class="hntgybcog"><path class="a9r_v3b3b"/><path class="okohc-b1j"/></g>`,
		"fallback": "uix:chewable-tablet",
	});
}

export default Component;
