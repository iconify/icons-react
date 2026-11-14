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
		"content": `<style>.bhol-ebqy {
  d: path("M10 11v10m-2.5 0h5M6.25 9.75a4 4 0 0 1 7.5 0");
}

.le6zpob9v {
  d: path("M2.5 8.25a8 8 0 0 1 15 0m-2.25 9.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bhol-ebqy"/><path class="le6zpob9v"/></g>`,
		"fallback": "uix-sharp:coverage-search",
	});
}

export default Component;
