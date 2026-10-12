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
		"content": `<style>.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wcpvigl8r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10h.01");
}

.wkjif9iyf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5c5.5 0 7.75 4.5 7.75 15m10.75-15c-5.5 0-7.75 4.5-7.75 15");
}
</style><g class="ux2u0rbkq"><path class="wkjif9iyf"/><path class="wcpvigl8r"/></g>`,
		"fallback": "iconoven:gravity-well-sharp",
	});
}

export default Component;
