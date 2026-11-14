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
		"content": `<style>.ko7ia1xxo {
  d: path("M9.75 12.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm2.25-6V8m0 9.5v1.25m-6.25-6h1.5m9.5 0h1.5");
}

.qo05omb1p {
  d: path("M3 4h18v17.5H3Zm5-1.5V6m8-3.5V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qo05omb1p"/><path class="ko7ia1xxo"/></g>`,
		"fallback": "uix-sharp:calendar-holiday",
	});
}

export default Component;
