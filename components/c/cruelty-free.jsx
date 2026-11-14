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
		"content": `<style>.q6slkem0g {
  d: path("M7.75 6.75a1.75 4 0 1 0 3.5 0a1.75 4 0 1 0-3.5 0Zm5 0a1.75 4 0 1 0 3.5 0a1.75 4 0 1 0-3.5 0ZM10 14.5h.01m3.99 0h.01");
}

.tihk44oem {
  d: path("M6.5 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tihk44oem"/><path class="q6slkem0g"/></g>`,
		"fallback": "uix-sharp:cruelty-free",
	});
}

export default Component;
