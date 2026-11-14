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
		"content": `<style>.g1blxfb2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19m-19 7.5h19M6 14v7.5m6-7.5v7.5m6-7.5v7.5M4 9.5h6L9 14H5Zm3 0V4m0 2.5Q4.5 6.5 4.5 4M7 6.5q2.5 0 2.5-2.5M14 9.5h6L19 14h-4Zm3 0V3m0 3.5q2.5 0 2.5-3");
}
</style><path class="g1blxfb2p"/>`,
		"fallback": "uix-sharp:balcony-garden",
	});
}

export default Component;
