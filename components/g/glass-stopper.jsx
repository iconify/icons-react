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
		"content": `<style>.fwze4p0rg {
  d: path("M10.5 7.5v3h-2l2 11h3l2-11h-2v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vay788w-x {
  d: path("M6 5a6 2.5 0 1 0 12 0A6 2.5 0 1 0 6 5Z");
}
</style><g class="ulnmmdpxh"><path class="vay788w-x"/><path class="fwze4p0rg"/></g>`,
		"fallback": "uix-sharp:glass-stopper",
	});
}

export default Component;
