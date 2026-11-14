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
		"content": `<style>.nr1jsabyh {
  d: path("m3 10l7 3.5l1.318-.659m2.505-1.252L17 10m-7 3.5v8m2-12L19.5 2M15 2h4.5v4.5");
}

.s59juobne {
  d: path("M15.993 9.496L17 10v8l-7 3.5L3 18v-8l7-3.5l.716.358");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s59juobne"/><path class="nr1jsabyh"/></g>`,
		"fallback": "uix-sharp:export-module",
	});
}

export default Component;
