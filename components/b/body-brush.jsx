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
		"content": `<style>.j76r7rgxu {
  d: path("M3.5 9a5.5 4.5 0 1 0 11 0a5.5 4.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ww0yibbjr {
  d: path("m10.044 13.864l1.945-1.945l6.717 6.717l-1.945 1.945ZM7.5 7.5h.01m2.99 3h.01");
}
</style><g class="ulnmmdpxh"><path class="j76r7rgxu"/><path class="ww0yibbjr"/></g>`,
		"fallback": "uix-sharp:body-brush",
	});
}

export default Component;
