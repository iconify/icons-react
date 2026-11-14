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
		"content": `<style>.d5c02v83h {
  fill: currentColor;
  d: path("M2.5 2.5h12V6h-12Z");
}

.ghebrcc5x {
  d: path("M2.5 21.5h19M3 18.5l4.5-6l4 3l4.5-6l5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d5c02v83h"/><path class="ghebrcc5x"/></g>`,
		"fallback": "uix-sharp:chart-title",
	});
}

export default Component;
