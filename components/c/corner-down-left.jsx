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
		"content": `<style>.dwwgy-e6i {
  d: path("m9.5 9.5l-5 5l5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vxh-ftnjv {
  d: path("M19.5 4.5V11a3.5 3.5 0 0 1-3.5 3.5H4.5");
}
</style><g class="hntgybcog"><path class="vxh-ftnjv"/><path class="dwwgy-e6i"/></g>`,
		"fallback": "uix:corner-down-left",
	});
}

export default Component;
