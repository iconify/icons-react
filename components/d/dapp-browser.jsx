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
		"content": `<style>.gl5r1muxd {
  d: path("M2.5 3h19v18h-19Zm0 5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_81gufuq {
  d: path("M7 11h10v7H7Zm5 0v7m-5-3.5h10");
}
</style><g class="ulnmmdpxh"><path class="gl5r1muxd"/><path class="x_81gufuq"/></g>`,
		"fallback": "uix-sharp:dapp-browser",
	});
}

export default Component;
