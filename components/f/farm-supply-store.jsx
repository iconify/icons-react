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
		"content": `<style>.n2jh8ls7s {
  d: path("m3.5 11l3-5.5L12 3l5.5 2.5l3 5.5v10h-17Z");
}

.sbv6bfbfo {
  d: path("M9 9v2a3 3 0 0 0 6 0V9m-3 0v9.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n2jh8ls7s"/><path class="sbv6bfbfo"/></g>`,
		"fallback": "uix-sharp:farm-supply-store",
	});
}

export default Component;
