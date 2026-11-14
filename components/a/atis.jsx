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
		"content": `<style>.azn35e-qr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.5h9v14h-9Zm3 0v-5m0 14h3m5.873-7.91a3.75 3.75 0 0 1 0 4.82m2.298-6.749a6.75 6.75 0 0 1 0 8.678");
}
</style><path class="azn35e-qr"/>`,
		"fallback": "uix-sharp:atis",
	});
}

export default Component;
