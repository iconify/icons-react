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
		"content": `<style>.hj0bgbc3r {
  d: path("M6.5 7.5h1a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h7M6.5 12h7a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h1m-11 4.5h3a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h5");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="hj0bgbc3r"/></g>`,
		"fallback": "uix-sharp:consent-preferences",
	});
}

export default Component;
