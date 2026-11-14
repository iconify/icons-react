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
		"content": `<style>.hyku-5b5n {
  d: path("M2.5 6h19v12h-19ZM6 12h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrq70cbzc {
  d: path("m15 10.75l2 2l2-2");
}
</style><g class="ulnmmdpxh"><path class="hyku-5b5n"/><path class="xrq70cbzc"/></g>`,
		"fallback": "uix-sharp:dropdown",
	});
}

export default Component;
