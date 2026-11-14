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
		"content": `<style>.rt5xcbbip {
  d: path("m3.5 11.5l6.5-8h8.5a2 2 0 0 1 2 2V19a2.5 2.5 0 0 1-2.5 2.5H5.5a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyp5l0vnx {
  d: path("m8 10.5l3.75-4.25h5.75v4.25Zm6.5 3.5h3");
}
</style><g class="ulnmmdpxh"><path class="rt5xcbbip"/><path class="yyp5l0vnx"/></g>`,
		"fallback": "uix-sharp:car-door",
	});
}

export default Component;
