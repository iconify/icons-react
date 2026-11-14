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
		"content": `<style>.bcm-xab8u {
  d: path("M11.75 8.25a4.25 4.25 0 1 1 5.5 4.25m-8-3V13M16 2v1m5.5 5.5h.5m-2-4l.75-.75M20 12.5l.75.75");
}

.czauy2bcv {
  d: path("M2.5 9.5H16v12H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="czauy2bcv"/><path class="bcm-xab8u"/></g>`,
		"fallback": "uix-sharp:delivery-today",
	});
}

export default Component;
