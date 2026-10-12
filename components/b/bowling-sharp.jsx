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
		"content": `<style>.b6sj3-bad {
  cx: 16.75px;
  cy: 16.75px;
  r: 4.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.icimi-b4c {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.25 15h.01m2.99 0h.01m-1.51 2.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x2qk--bha {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h2V5c0 1.25-.75 2.25-.75 3.5c0 1.5 2.25 3.5 2.25 7c0 2.25-.5 4.25-1 5.75h-5c-.5-1.5-1-3.5-1-5.75C2.75 12 5 10 5 8.5c0-1.25-.75-2.25-.75-3.5V2.75zM5 10.25h2.5");
}
</style><g class="ux2u0rbkq"><path class="x2qk--bha"/><circle class="b6sj3-bad"/><path class="icimi-b4c"/></g>`,
		"fallback": "iconoven:bowling-sharp",
	});
}

export default Component;
