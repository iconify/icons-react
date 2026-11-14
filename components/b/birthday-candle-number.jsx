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
		"content": `<style>.i22n12bjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 11.5L12.5 9v12m-3 0h6m-3-14.75C11.1 5.4 11 3.9 12.5 2c1.5 1.9 1.4 3.4 0 4.25Z");
}
</style><path class="i22n12bjv"/>`,
		"fallback": "uix-sharp:birthday-candle-number",
	});
}

export default Component;
