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
		"content": `<style>.sfukuvpxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5L12 3l9.5 5.5m-17 0V21m15-12.5V21m-10-9H17l-1 4h-5.5Zm-2-1h1l2 5m.5 3h.01m4.49 0h.01");
}
</style><path class="sfukuvpxc"/>`,
		"fallback": "uix-sharp:cart-bay",
	});
}

export default Component;
