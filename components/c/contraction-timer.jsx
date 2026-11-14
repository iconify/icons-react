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
		"content": `<style>.z2zp6lbtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5C4.75 15.5 5 5 7 5s2.25 10.5 4.25 10.5S13.5 3 15.75 3c1.363 0 1.992 4.585 2.776 8.201M14.75 18.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM18 14v1.25m0 3.25l1.25-1.25");
}
</style><path class="z2zp6lbtm"/>`,
		"fallback": "uix-sharp:contraction-timer",
	});
}

export default Component;
