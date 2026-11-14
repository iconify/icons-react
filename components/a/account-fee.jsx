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
		"content": `<style>.a8t3nmoac {
  d: path("M5.75 7.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm9 4C14.5 10.5 13.9 10 13 10c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M13 8.75V10m0 6v1.25");
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
</style><g class="ulnmmdpxh"><path class="r97nb_b-i"/><path class="a8t3nmoac"/></g>`,
		"fallback": "uix-sharp:account-fee",
	});
}

export default Component;
