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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.waj52lb9j {
  d: path("M13.357 20.782L12 21.5L3.5 17V7L12 2.5L20.5 7v4.682");
}

.zoqh2lbhd {
  d: path("m3.5 7l8.5 4.5L20.5 7M12 11.5v6.1m0 1.8v2.1m6-7v7m-3-3l3 3l3-3");
}
</style><g class="ulnmmdpxh"><path class="waj52lb9j"/><path class="zoqh2lbhd"/></g>`,
		"fallback": "uix-sharp:heavy-package",
	});
}

export default Component;
