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
		"content": `<style>.l2tu2emwx {
  d: path("M16 4H6.5c-2.5 0-4 2.5-4 5s1.5 5 4 5H16");
}

.tw3ss488w {
  d: path("M13.5 9a2.5 5 0 1 0 5 0a2.5 5 0 1 0-5 0ZM7 4v10m3.5-10v10m.5 5a5 1.75 0 1 0 10 0a5 1.75 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l2tu2emwx"/><path class="tw3ss488w"/></g>`,
		"fallback": "uix-sharp:barrel-tipped",
	});
}

export default Component;
