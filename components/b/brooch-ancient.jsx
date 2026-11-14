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
		"content": `<style>.ha9xtnb5j {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nd_jx4bdc {
  d: path("M8.5 13a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 6.5h16.5a1.75 1.75 0 0 0 0-3.5");
}
</style><g class="hntgybcog"><path class="ha9xtnb5j"/><path class="nd_jx4bdc"/></g>`,
		"fallback": "uix:brooch-ancient",
	});
}

export default Component;
