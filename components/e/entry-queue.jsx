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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xexydjj6k {
  d: path("M6 21.5v-19h12v19m-16-10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm1.25 1.25v8.75m16.25-10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm1.25 1.25v8.75");
}

.xo3jsqt9v {
  d: path("M4.5 12q7.5 8 15 0");
}
</style><g class="ulnmmdpxh"><path class="xexydjj6k"/><path class="xo3jsqt9v"/></g>`,
		"fallback": "uix-sharp:entry-queue",
	});
}

export default Component;
