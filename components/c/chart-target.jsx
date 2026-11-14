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
		"content": `<style>.fsbyttsma {
  d: path("m2.5 21.5l3-5.5L8 19l6-9");
}

.l8ln1md9o {
  d: path("M10.5 10a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.oxxnebbjv {
  fill: currentColor;
  d: path("M14 10h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wejimtbna {
  d: path("M6.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="wejimtbna"/><path class="l8ln1md9o"/><path class="oxxnebbjv"/><path class="fsbyttsma"/></g>`,
		"fallback": "uix-sharp:chart-target",
	});
}

export default Component;
