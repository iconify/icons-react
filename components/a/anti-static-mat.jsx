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
		"content": `<style>.j81n9ubbl {
  d: path("M14 8.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.p4z7z5b8d {
  d: path("M6.5 4.5h15l-4 11h-15Zm5.5 11c0 4 4.5 2.5 5.5 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p4z7z5b8d"/><path class="j81n9ubbl"/></g>`,
		"fallback": "uix-sharp:anti-static-mat",
	});
}

export default Component;
