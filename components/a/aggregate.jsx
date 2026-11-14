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
		"content": `<style>.ish8tiu1k {
  fill: currentColor;
  d: path("M15.5 10h6v4h-6Z");
}

.u4godzowz {
  d: path("M9.5 4.5c1.5 0 2 .75 2 2.25v3c0 1.5.5 2.25 1.75 2.25c-1.25 0-1.75.75-1.75 2.25v3c0 1.5-.5 2.25-2 2.25M2.5 6H7m-4.5 6H7m-4.5 6H7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ish8tiu1k"/><path class="u4godzowz"/></g>`,
		"fallback": "uix-sharp:aggregate",
	});
}

export default Component;
