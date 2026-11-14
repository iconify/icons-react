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
		"content": `<style>.fxd0pnnwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V8m14 13.5V8M3.5 8h17m-17 4.5h17m-18 9h5m9 0h5");
}
</style><path class="fxd0pnnwt"/>`,
		"fallback": "uix-sharp:hurdles",
	});
}

export default Component;
