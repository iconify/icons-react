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
		"content": `<style>.hwpedcc7t {
  d: path("M3.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.5 3.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.qcydkvbdd {
  d: path("M4.5 18.5A3.5 3.5 0 0 1 8 12a4 4 0 0 1 8 0a3.5 3.5 0 0 1 3.5 6.5Zm7.5 0V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qcydkvbdd"/><path class="hwpedcc7t"/></g>`,
		"fallback": "uix-sharp:berry-bush",
	});
}

export default Component;
