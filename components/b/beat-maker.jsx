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
		"content": `<style>.b4dvasppn {
  fill: currentColor;
  d: path("M14 8.75h4v4h-4Z");
}

.fnccr8vti {
  d: path("M6 15.5h4v4H6Zm8 0h4v4h-4Z");
}

.frvc0ccmu {
  d: path("M2.5 2.5h19v19h-19Zm3.5 3h4.5");
}

.n68k7vb-x {
  d: path("M6 8.75h4v4H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="frvc0ccmu"/><path class="n68k7vb-x"/><path class="b4dvasppn"/><path class="fnccr8vti"/></g>`,
		"fallback": "uix-sharp:beat-maker",
	});
}

export default Component;
