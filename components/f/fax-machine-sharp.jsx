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
		"content": `<style>.cr1dd9qzi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 8.25a2.4 2.4 0 0 1 4.75 0M11 11V3.75h6.75V11m-15 0h18.5v10.25H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zfz3fzbhl {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 16.25h.01m3.99 0h.01m3.99 0h.01");
}
</style><g class="ux2u0rbkq"><path class="cr1dd9qzi"/><path class="zfz3fzbhl"/></g>`,
		"fallback": "iconoven:fax-machine-sharp",
	});
}

export default Component;
