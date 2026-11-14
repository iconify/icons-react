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

.i4b1r2bjy {
  d: path("M8 7v8a5 5 0 1 0 3.25-4.75l-.25 3");
}

.x5br__bzy {
  d: path("M6 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="x5br__bzy"/><path class="i4b1r2bjy"/></g>`,
		"fallback": "uix:circle-hook",
	});
}

export default Component;
