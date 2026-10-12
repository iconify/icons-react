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
		"content": `<style>.b5pebvmua {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.25 14.75h1m2.5 0h1m2.5 0h1m2.5 0h1");
}

.fdtrm7b0s {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 9.25h3.5");
}

.mhm7ccc0x {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 9.25h.01m3.49 0h.01");
}

.q1oy59b8h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h18.5v12.5H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="q1oy59b8h"/><path class="mhm7ccc0x"/><path class="fdtrm7b0s"/><path class="b5pebvmua"/></g>`,
		"fallback": "iconoven:drum-machine-sharp",
	});
}

export default Component;
