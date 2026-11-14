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
		"content": `<style>.jc8dekbcc {
  d: path("M10 7.5s-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3Zm4 5.5s-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3Z");
}

.od4gdvdhv {
  d: path("M4.5 3h15l-2 18h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="od4gdvdhv"/><path class="jc8dekbcc"/></g>`,
		"fallback": "uix-sharp:condensation",
	});
}

export default Component;
