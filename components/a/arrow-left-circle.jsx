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

.iezfiwbiu {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m14 0h-9");
}

.oqb3-vbyd {
  d: path("m11.5 16l-4-4l4-4");
}
</style><g class="hntgybcog"><path class="iezfiwbiu"/><path class="oqb3-vbyd"/></g>`,
		"fallback": "uix:arrow-left-circle",
	});
}

export default Component;
