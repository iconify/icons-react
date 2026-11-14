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

.jl72gcylo {
  d: path("M5.25 12a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 1 0-13.5 0");
}

.tk6eyp-3h {
  d: path("m12.875 6.375l.666 2.951a1.5 1.5 0 0 0 1.133 1.133l2.951.666a.897.897 0 0 1 0 1.75l-2.951.666a1.5 1.5 0 0 0-1.133 1.133l-.666 2.951a.897.897 0 0 1-1.75 0l-.666-2.951a1.5 1.5 0 0 0-1.133-1.133l-2.951-.666a.897.897 0 0 1 0-1.75l2.951-.666a1.5 1.5 0 0 0 1.133-1.133l.666-2.951a.897.897 0 0 1 1.75 0");
}
</style><g class="hntgybcog"><path class="tk6eyp-3h"/><path class="jl72gcylo"/></g>`,
		"fallback": "uix:compass-rose",
	});
}

export default Component;
