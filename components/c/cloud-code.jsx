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
		"content": `<style>.lgfg99bvs {
  d: path("m10 11.5l-2 2.25L10 16m4-4.5l2 2.25L14 16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuq-jrx4t {
  d: path("M7 18.5a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7Z");
}
</style><g class="ulnmmdpxh"><path class="yuq-jrx4t"/><path class="lgfg99bvs"/></g>`,
		"fallback": "uix-sharp:cloud-code",
	});
}

export default Component;
