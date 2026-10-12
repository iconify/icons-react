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
		"content": `<style>.crng-cbuv {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 12.25h.01m13.99 0h.01");
}

.jlam6hxfq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 21.25V18a2.25 2.25 0 0 1 4.5 0v3.25");
}

.rd91lac9e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.78 20.8l.69-11.85l.03-.45h3v4h2.2v-1.75h2.2v1.75h2.2v-1.75h2.2v1.75h2.2v-4h3l.03.45l.69 11.85l.03.45H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="rd91lac9e"/><path class="jlam6hxfq"/><path class="crng-cbuv"/></g>`,
		"fallback": "iconoven:fortress-sharp",
	});
}

export default Component;
