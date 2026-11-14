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
		"content": `<style>.nkg1xmjni {
  d: path("m12 2.5l1.75 7.75L21.5 12l-7.75 1.75L12 21.5l-1.75-7.75L2.5 12l7.75-1.75Z");
}

.u7ugl512z {
  d: path("M5.25 12a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 1 0-13.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nkg1xmjni"/><path class="u7ugl512z"/></g>`,
		"fallback": "uix-sharp:compass-rose",
	});
}

export default Component;
