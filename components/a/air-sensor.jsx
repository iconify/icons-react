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
		"content": `<style>.dwqkzvbdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h11v12h-11Zm3 4.5h5m-5 3h5m5.75-4c1.5-1.5 3.25 1.5 5.25 0m-5.25 5c1.5-1.5 3.25 1.5 5.25 0");
}
</style><path class="dwqkzvbdq"/>`,
		"fallback": "uix-sharp:air-sensor",
	});
}

export default Component;
