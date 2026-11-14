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
		"content": `<style>.l2m6gobcu {
  d: path("M6.25 7.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM14.5 9.5l-3 3.5h3l-2.75 3.5");
}

.r97nb_b-i {
  d: path("M3 3h8.5l9.5 9.5l-8.5 8.5L3 11.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r97nb_b-i"/><path class="l2m6gobcu"/></g>`,
		"fallback": "uix-sharp:flash-sale",
	});
}

export default Component;
