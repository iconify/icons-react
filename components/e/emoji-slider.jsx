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
		"content": `<style>.fwizheqlr {
  d: path("M2.5 12h3m13 0h3m-16 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm4.25-2h.01m4.49 0h.01");
}

.t3zcp6p6j {
  d: path("M14.815 13.625a3.25 3.25 0 0 1-5.63 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fwizheqlr"/><path class="t3zcp6p6j"/></g>`,
		"fallback": "uix-sharp:emoji-slider",
	});
}

export default Component;
