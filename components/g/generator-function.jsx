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
		"content": `<style>.h46uk_brq {
  d: path("m19.25 15.25l2.25 2.25l-2.25 2.25");
}

.trr912bco {
  d: path("M16 4c-1-1-2.25-1.25-3.25-.75S11.25 4.75 11 6L9 18c-.25 1.25-.75 2.25-1.75 2.75S5 21 4 20M7.5 9.5h7M16 12v3.5a2 2 0 0 0 2 2h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="trr912bco"/><path class="h46uk_brq"/></g>`,
		"fallback": "uix-sharp:generator-function",
	});
}

export default Component;
