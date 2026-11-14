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
		"content": `<style>.f154f315p {
  d: path("M10.25 8.75L7.75 13h3l-2.5 4.25m6.5-8.75c3.25-3 6.75-1 6.25 2.75c-.5 3.25-.75 6.25.5 10.25");
}

.i7x1owbls {
  d: path("M5.5 6H13a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5.5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i7x1owbls"/><path class="f154f315p"/></g>`,
		"fallback": "uix-sharp:implantable-defibrillator",
	});
}

export default Component;
