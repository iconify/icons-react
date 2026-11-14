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
		"content": `<style>.lapfsxe-b {
  d: path("M6 11.25V7a2.5 2.5 0 0 1 2.5-2.5h7A2.5 2.5 0 0 1 18 7v4.25M8.75 15.5A3.5 3.5 0 0 1 11 12.25");
}

.qu1fttbcf {
  d: path("M9 20.5a6.75 6.75 0 1 1 6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qu1fttbcf"/><path class="lapfsxe-b"/></g>`,
		"fallback": "uix-sharp:home-gym",
	});
}

export default Component;
