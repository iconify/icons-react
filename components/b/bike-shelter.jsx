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
		"content": `<style>.d3sekfbzl {
  d: path("M2.5 4.5h19M4 4.5v15m16-15v15m-13.25-2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yn6xcrb2x {
  d: path("m8.75 17.5l2-3.5h3.5L12 17.5Zm5.5-3.5l1 3.5m-1-3.5l-.5-2");
}
</style><g class="ulnmmdpxh"><path class="d3sekfbzl"/><path class="yn6xcrb2x"/></g>`,
		"fallback": "uix-sharp:bike-shelter",
	});
}

export default Component;
