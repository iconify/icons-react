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
		"content": `<style>.dkzuh77mw {
  fill: currentColor;
  d: path("m12 5.5l1.176 3.132l3.342.15l-2.616 2.086l.89 3.225L12 12.25l-2.792 1.843l.89-3.225l-2.616-2.086l3.342-.15Z");
}

.tdo0-wb3y {
  d: path("M2.5 5A2.5 2.5 0 0 1 5 2.5h14A2.5 2.5 0 0 1 21.5 5v10a2.5 2.5 0 0 1-2.5 2.5h-8L6.5 21v-3.5H5A2.5 2.5 0 0 1 2.5 15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tdo0-wb3y"/><path class="dkzuh77mw"/></g>`,
		"fallback": "uix-sharp:employee-recognition",
	});
}

export default Component;
