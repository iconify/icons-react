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
		"content": `<style>.zszhclbhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10v18H7Zm0 3h10M7 18h10m-5-8.5v5m0-2.5l-1.75-1.75M12 12l1.75-1.75");
}
</style><path class="zszhclbhb"/>`,
		"fallback": "uix-sharp:beer-can",
	});
}

export default Component;
