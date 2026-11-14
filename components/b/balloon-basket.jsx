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
		"content": `<style>.pypz36bgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10h17v3h-17Zm2 3h13L17 21.5H7Zm0-3L7 2.5M18.5 10L17 2.5");
}
</style><path class="pypz36bgp"/>`,
		"fallback": "uix-sharp:balloon-basket",
	});
}

export default Component;
