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
		"content": `<style>.ccrce8luq {
  d: path("M2.5 9H17l4.5-2.5l-2.75 6.5q-.5 1.5-2 1.5H5.25Q4 14.5 3.5 13Z");
}

.u4uwt6bgs {
  d: path("M6 9V5.5h6L14.5 9m-7 5.5v5m8-5v5m-12 0h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ccrce8luq"/><path class="u4uwt6bgs"/></g>`,
		"fallback": "uix-sharp:boat-dealer",
	});
}

export default Component;
