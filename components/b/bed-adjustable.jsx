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
		"content": `<style>.cj-99jbrb {
  d: path("m11 6.75l2.5-.25l.25-2.5");
}

.t37qd74zf {
  d: path("m3 7.5l5 6h13M2.5 17h19m-17 0v3.5m15-3.5v3.5M7 3.5c2.5-.5 5 .5 6.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t37qd74zf"/><path class="cj-99jbrb"/></g>`,
		"fallback": "uix-sharp:bed-adjustable",
	});
}

export default Component;
