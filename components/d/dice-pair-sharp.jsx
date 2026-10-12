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
		"content": `<style>.hi5yvnb1n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.17 10.51l4.93-.87l2.46-.43l.43 2.46l.87 4.93l.43 2.46l-2.46.43l-4.93.87l-2.46.43l-.43-2.46l-.87-4.93l-.43-2.46z");
}

.jbo442noy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.37 6.22h.01m1.75 3.06h.01");
}

.q--e1l6qa {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.29 3.61l3.86 1.04l1.69.45l-.45 1.69l-1.04 3.86l-.45 1.69l-1.69-.45l-3.86-1.04l-1.69-.45l.45-1.69l1.04-3.86l.45-1.69z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.y2njm-dyb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.89 13.17h.01M8.5 15h.01m2.6 1.83h.01");
}
</style><g class="ux2u0rbkq"><path class="q--e1l6qa"/><path class="jbo442noy"/><path class="hi5yvnb1n"/><path class="y2njm-dyb"/></g>`,
		"fallback": "iconoven:dice-pair-sharp",
	});
}

export default Component;
