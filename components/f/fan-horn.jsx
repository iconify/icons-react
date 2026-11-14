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
		"content": `<style>.fmgv5ub1p {
  d: path("M5 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM2.5 21.5c0-3.75 3-6.25 6.5-6.25s6.5 2.5 6.5 6.25");
}

.qrzpb0wzr {
  d: path("m12.5 9.75l9-4.25V14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fmgv5ub1p"/><path class="qrzpb0wzr"/></g>`,
		"fallback": "uix-sharp:fan-horn",
	});
}

export default Component;
