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
		"content": `<style>.n0w1h_bzp {
  d: path("M9.5 8h5v4.5h-5ZM3 4.5h6m6 0h6");
}

.pyij3b63s {
  d: path("M2.5 11v7.5A2.5 2.5 0 0 0 5 21h14a2.5 2.5 0 0 0 2.5-2.5V11M6 4.5V8h12V4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pyij3b63s"/><path class="n0w1h_bzp"/></g>`,
		"fallback": "uix-sharp:drone-dock",
	});
}

export default Component;
