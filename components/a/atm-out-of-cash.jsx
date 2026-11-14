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
		"content": `<style>.rol_m-bdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v4.5h-19ZM5 8.5v4m14-4v4M5 15.75v2.75a2 2 0 0 0 2 2h1.75M19 15.75v2.75a2 2 0 0 1-2 2h-1.75m-3.75 0h1");
}
</style><path class="rol_m-bdh"/>`,
		"fallback": "uix-sharp:atm-out-of-cash",
	});
}

export default Component;
