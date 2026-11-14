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
		"content": `<style>.dai76bdum {
  d: path("M8 13.5h8V21H8Zm0 0l8 7.5m0-7.5L8 21m2.5-14h3v3h-3Z");
}

.n2jh8ls7s {
  d: path("m3.5 11l3-5.5L12 3l5.5 2.5l3 5.5v10h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n2jh8ls7s"/><path class="dai76bdum"/></g>`,
		"fallback": "uix-sharp:barn",
	});
}

export default Component;
