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
		"content": `<style>.c1vhidc8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5C2.5 17 4.5 15 8 15m0-2.5h5v5H8Zm5 2.5h1.25m2.25 0h5m-5.25-2.25l3.75-3m-3.75 7.5l3.75 3");
}
</style><path class="c1vhidc8l"/>`,
		"fallback": "uix-sharp:fiber-internet",
	});
}

export default Component;
