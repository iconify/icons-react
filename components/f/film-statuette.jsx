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
		"content": `<style>.dd88glbkn {
  d: path("m12 5.5l.75 2h2L13.25 9l.5 2L12 9.75L10.25 11l.5-2l-1.5-1.5h2Z");
}

.kusm4_tnu {
  d: path("M5.5 2.5h13V8a6.5 6.5 0 0 1-13 0Zm6.5 12v3m-4 0h8v4H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kusm4_tnu"/><path class="dd88glbkn"/></g>`,
		"fallback": "uix-sharp:film-statuette",
	});
}

export default Component;
