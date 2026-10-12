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

.j2hd4ubib {
  d: path("M8.75 5.75a6 6 0 1 0 6 6h-6Z");
}

.px3vvqhil {
  cx: 18.75px;
  cy: 18.75px;
  r: 2.5px;
}

.s7y2fi7md {
  d: path("M11.75 2.75a6 6 0 0 1 6 6h-6Z");
}
</style><g class="hntgybcog"><path class="j2hd4ubib"/><path class="s7y2fi7md"/><circle class="px3vvqhil"/></g>`,
		"fallback": "iconoven:budget-pie",
	});
}

export default Component;
