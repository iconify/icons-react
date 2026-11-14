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
		"content": `<style>.b27-yrh8j {
  d: path("M3 3h18v18H3Zm0 4.5h18");
}

.m2nmvobxf {
  d: path("m6 18l3-7.5l3 7.5Zm1-2.5h4m4-3.5h3m-3 4h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b27-yrh8j"/><path class="m2nmvobxf"/></g>`,
		"fallback": "uix-sharp:character-panel",
	});
}

export default Component;
