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
		"content": `<style>.dk4bn0b2p {
  d: path("M2.5 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm15-6l-2.25-5q3.25-1.5 6.5 0l-2.25 5Zm1 0v13");
}

.mzsye2bux {
  d: path("M5.5 15a3.5 3.5 0 0 1 7 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dk4bn0b2p"/><path class="mzsye2bux"/></g>`,
		"fallback": "uix-sharp:blush",
	});
}

export default Component;
