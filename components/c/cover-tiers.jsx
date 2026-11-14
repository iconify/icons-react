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
		"content": `<style>.j9szwkhlz {
  d: path("M14.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM18 4.5v3");
}

.mqml52bmn {
  d: path("M2.5 21v-4h6.25v-3.75h5.75V9.5h7V21Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mqml52bmn"/><path class="j9szwkhlz"/></g>`,
		"fallback": "uix-sharp:cover-tiers",
	});
}

export default Component;
