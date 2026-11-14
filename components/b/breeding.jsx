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
		"content": `<style>.cl5cl4bfn {
  d: path("M10.5 11a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m7.75-3.25l3-3m-3.25 0h3.25V8");
}

.d7b4u_brx {
  d: path("M3.5 9a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M8 13.5v7m-2.5-3h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d7b4u_brx"/><path class="cl5cl4bfn"/></g>`,
		"fallback": "uix:breeding",
	});
}

export default Component;
