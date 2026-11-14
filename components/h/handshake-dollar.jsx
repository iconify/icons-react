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
		"content": `<style>.duporv-yi {
  d: path("M18.75 17c-.25-.5-.5-.5-.75-.5q-.75 0-.75.75c0 .5 1.5.5 1.5 1.5q0 .75-.75.75c-.5 0-.75-.25-.75-.5m.75-3.25v.75m0 3v.75");
}

.hetk8c6vi {
  d: path("M2.5 3.5h3V12h-3m19-8.5h-3v7.7m2.7.8h.3m-16-6.5h3l3-2H14L18.5 6m-13 4.5l3 2.5a1.5 1.5 0 0 0 2.25-1.5A1.5 1.5 0 0 0 13 10a1.5 1.5 0 0 0 2.25-1.5l3.25 2M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hetk8c6vi"/><path class="duporv-yi"/></g>`,
		"fallback": "uix-sharp:handshake-dollar",
	});
}

export default Component;
