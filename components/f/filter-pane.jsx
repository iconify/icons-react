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
		"content": `<style>.i8j7esozv {
  d: path("M2.5 3.5h19v17h-19Zm8 0v17M5 8h3m-3 4h3m-3 4h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1k0ex5ae {
  fill: currentColor;
  d: path("M5.25 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm1.25 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-2 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="i8j7esozv"/><path class="z1k0ex5ae"/></g>`,
		"fallback": "uix-sharp:filter-pane",
	});
}

export default Component;
