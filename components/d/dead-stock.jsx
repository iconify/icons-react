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
		"content": `<style>.qrk2oi4tl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.9 3h14.6v4.5H11.4m-7.8 0H2.5V6.4m8.9 1.1H20v8.6m-2.4 5.4H4V7.9M3 3l18 18");
}
</style><path class="qrk2oi4tl"/>`,
		"fallback": "uix-sharp:dead-stock",
	});
}

export default Component;
