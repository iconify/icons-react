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
		"content": `<style>.gcfo9u_zg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm0 5h15m-7.5 0v14M7 12h2.5M7 16.5h2.5m5-4.5H17m-2.5 4.5H17");
}
</style><path class="gcfo9u_zg"/>`,
		"fallback": "uix-sharp:balance-sheet",
	});
}

export default Component;
