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

.jn2ogzbtr {
  d: path("M3 9.5C5 6 13 5.5 18 8l3-1.5v6L18 11c-5 2.5-13 2-15-1.5");
}

.rbwyyi75n {
  d: path("M5.5 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0M8 13v3.5a1.75 1.75 0 0 0 3.5 0m2.5-4V16a1.75 1.75 0 0 0 3.5 0");
}
</style><g class="hntgybcog"><path class="jn2ogzbtr"/><path class="rbwyyi75n"/></g>`,
		"fallback": "uix:fishing-lure",
	});
}

export default Component;
