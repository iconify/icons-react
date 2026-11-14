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
		"content": `<style>.lqnb0t68u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.5v2a3 3 0 0 0 6 0v-2M5 6.5c0-2.75 2-4.25 4.5-4.25S14 3.75 14 6.5m-9 0h12m-5.564 14H2.5c0-3.25 3-5.5 7-5.5c.687 0 1.345.066 1.964.193m2.786.057h7.5v6.5h-7.5Zm3.75 0V18");
}
</style><path class="lqnb0t68u"/>`,
		"fallback": "uix-sharp:delivery-driver",
	});
}

export default Component;
