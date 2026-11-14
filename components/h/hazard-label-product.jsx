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
		"content": `<style>.dwdb878nc {
  d: path("m19.061 14.811l1.878 1.878a1.5 1.5 0 0 1 0 2.122l-1.878 1.878a1.5 1.5 0 0 1-2.122 0l-1.878-1.878a1.5 1.5 0 0 1 0-2.122l1.878-1.878a1.5 1.5 0 0 1 2.122 0M18 16.5v2.25");
}

.gj0qkdbok {
  d: path("M13.774 21.5H5v-10c0-2 1.5-3 3.5-3.5V5.5h6V8c2 .5 3.5 1.5 3.5 3.5v.026M9.5 2.5h4A1.5 1.5 0 0 1 15 4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8 4a1.5 1.5 0 0 1 1.5-1.5M5 13.5h9.3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gj0qkdbok"/><path class="dwdb878nc"/></g>`,
		"fallback": "uix:hazard-label-product",
	});
}

export default Component;
