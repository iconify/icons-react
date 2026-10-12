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
		"content": `<style>.a7x_r19cg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 18.5V14h1.9a1.12 1.12 0 0 1 0 2.25h-1.9h2.4a1.12 1.12 0 0 1 0 2.25Z");
}

.bfg3ugh3t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.5 4h.01");
}

.plwjgrz1p {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16 5.25l-2.5 6.25m-10.75 0h18.5V21H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="bfg3ugh3t"/><path class="plwjgrz1p"/><path class="a7x_r19cg"/></g>`,
		"fallback": "iconoven:brake-pedal-sharp",
	});
}

export default Component;
