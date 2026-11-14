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

.i5nsu8bek {
  d: path("M10 12h-.5a1 1 0 0 0-1 1v.5a1 1 0 0 1-1 1a1 1 0 0 1 1 1v.5a1 1 0 0 0 1 1h.5m4-5h.5a1 1 0 0 1 1 1v.5a1 1 0 0 0 1 1a1 1 0 0 0-1 1v.5a1 1 0 0 1-1 1H14");
}

.zpx_6t8ti {
  d: path("M7 19a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7Z");
}
</style><g class="hntgybcog"><path class="zpx_6t8ti"/><path class="i5nsu8bek"/></g>`,
		"fallback": "uix:cloud-api",
	});
}

export default Component;
