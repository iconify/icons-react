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
		"content": `<style>.b05us-bvc {
  d: path("M7 12c0-6.5 8.5-8.5 13.5-4M17 12c0 6.5-8.5 8.5-13.5 4");
}

.c0lx-yb_s {
  d: path("M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c0lx-yb_s"/><path class="b05us-bvc"/></g>`,
		"fallback": "uix:galaxy",
	});
}

export default Component;
