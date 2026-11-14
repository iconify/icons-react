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
		"content": `<style>.om3xhjljw {
  d: path("M6 15a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.u741y9bqd {
  d: path("M9.5 3h5L17 5.75L12 9L7 5.75ZM7 5.75h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="om3xhjljw"/><path class="u741y9bqd"/></g>`,
		"fallback": "uix-sharp:engaged-couple",
	});
}

export default Component;
