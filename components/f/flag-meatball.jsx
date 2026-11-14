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
		"content": `<style>.p644hptxq {
  d: path("M4 2.5v19m0-18h16v12H4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uq8lnbcos {
  d: path("M8.75 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="p644hptxq"/><path class="uq8lnbcos"/></g>`,
		"fallback": "uix-sharp:flag-meatball",
	});
}

export default Component;
