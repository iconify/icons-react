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
		"content": `<style>.d3jigzxnt {
  d: path("M8.75 9h6.5v2a1 1 0 0 0 0 2v2h-6.5v-2a1 1 0 0 0 0-2Z");
}

.qily9sb1s {
  d: path("M6 2.5h12v19H6Zm4.5 2.75h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qily9sb1s"/><path class="d3jigzxnt"/></g>`,
		"fallback": "uix-sharp:digital-coupon",
	});
}

export default Component;
