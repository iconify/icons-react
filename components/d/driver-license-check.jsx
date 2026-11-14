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
		"content": `<style>.dld4-db-m {
  d: path("M6.25 8.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM5 15.5a3 3 0 0 1 6 0M13.5 9H18m-3.25 9l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwkc4-bza {
  d: path("M11.3 18.5H2.5v-15h19v8.8");
}
</style><g class="ulnmmdpxh"><path class="wwkc4-bza"/><path class="dld4-db-m"/></g>`,
		"fallback": "uix-sharp:driver-license-check",
	});
}

export default Component;
