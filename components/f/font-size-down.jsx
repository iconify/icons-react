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
		"content": `<style>.xqs36cbfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h11M8.5 5v14m10-10v9.5m-2.75-2.75l2.75 2.75l2.75-2.75");
}
</style><path class="xqs36cbfi"/>`,
		"fallback": "uix-sharp:font-size-down",
	});
}

export default Component;
