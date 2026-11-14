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
		"content": `<style>.l85868bsf {
  d: path("M5 21.5V10a7 7 0 0 1 14 0v11.5");
}

.ly8029b5c {
  d: path("M8 16V9.75a4 4 0 0 1 8 0V16Zm2.75-6.25V13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l85868bsf"/><path class="ly8029b5c"/></g>`,
		"fallback": "uix-sharp:gel-polish",
	});
}

export default Component;
