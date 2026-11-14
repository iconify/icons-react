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
		"content": `<style>.ea59o8_0s {
  d: path("M5.5 14.25h9v4.5h-9Zm3 0v4.5m3-4.5v4.5M18 16.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yejno1dvb {
  d: path("M2.5 11.5h19v10h-19Zm6.5 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7.5m-7.25 0L4.5 5.75L9 3.25m7.25 8.25l3.25-5.75l-4.5-2.5");
}
</style><g class="ulnmmdpxh"><path class="yejno1dvb"/><path class="ea59o8_0s"/></g>`,
		"fallback": "uix-sharp:cash-counter-machine",
	});
}

export default Component;
