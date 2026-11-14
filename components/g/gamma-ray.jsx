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
		"content": `<style>.a75jntbgd {
  d: path("m18.5 9l3 3l-3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlkep1bth {
  d: path("M2.5 12L5 6.5l3.5 11l3.5-11l3 9l1.75-3.5h4.75");
}
</style><g class="ulnmmdpxh"><path class="vlkep1bth"/><path class="a75jntbgd"/></g>`,
		"fallback": "uix-sharp:gamma-ray",
	});
}

export default Component;
