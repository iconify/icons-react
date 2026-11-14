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
		"content": `<style>.iz-2vqt_x {
  d: path("M12 10a2 2 0 0 1 0 4Zm0-7.5v1.75m0 15.5v1.75M2.5 12h1.75m15.5 0h1.75M5.25 5.25L6.5 6.5m11 11l1.25 1.25m0-13.5L17.5 6.5M5.25 18.75L6.5 17.5");
}

.jh--vwb6r {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jh--vwb6r"/><path class="iz-2vqt_x"/></g>`,
		"fallback": "uix-sharp:brightness-adjust",
	});
}

export default Component;
