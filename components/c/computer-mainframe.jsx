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
		"content": `<style>.b-qgm3wxt {
  d: path("M5 2.5h14v19H5ZM5 13h14m-7 0v8.5");
}

.i_34jxb1d {
  d: path("M9.5 7.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b-qgm3wxt"/><path class="i_34jxb1d"/></g>`,
		"fallback": "uix-sharp:computer-mainframe",
	});
}

export default Component;
