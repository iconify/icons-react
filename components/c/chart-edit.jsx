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
		"content": `<style>.fg8nb-p7y {
  d: path("M3.5 3v17.5H12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xb7ymwafm {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m2.5 12l-4.25 4.25l-2.5.5l.5-2.5l4.25-4.25zm-6.25 2.25l2 2");
}
</style><g class="hntgybcog"><path class="fg8nb-p7y"/><path class="xb7ymwafm"/></g>`,
		"fallback": "uix:chart-edit",
	});
}

export default Component;
