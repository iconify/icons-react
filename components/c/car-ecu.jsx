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
		"content": `<style>.lpmbu6bzf {
  d: path("M8.5 7.5h7v6h-7Zm-1.5 9V20m5-3.5V20m5-3.5V20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywshqnbgr {
  d: path("M3 4.5h18v12H3Z");
}
</style><g class="ulnmmdpxh"><path class="ywshqnbgr"/><path class="lpmbu6bzf"/></g>`,
		"fallback": "uix-sharp:car-ecu",
	});
}

export default Component;
