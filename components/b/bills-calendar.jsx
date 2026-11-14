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
		"content": `<style>.e_mmajg-s {
  d: path("M8.75 19H4.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2H16a2 2 0 0 1 2 2v3H2.5m4-6.5v3m7.5-3v3");
}

.r2fz5-bpc {
  d: path("M11.5 12h10v9.5L19 20.25l-2.5 1.25l-2.5-1.25l-2.5 1.25Zm3 3.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e_mmajg-s"/><path class="r2fz5-bpc"/></g>`,
		"fallback": "uix-sharp:bills-calendar",
	});
}

export default Component;
