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
		"content": `<style>.n_frlqb1j {
  d: path("M2.5 21h3M4 21V4h16v17m-1.5 0h3");
}

.n-hhsg8tm {
  d: path("M7 4v12h10V4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n_frlqb1j"/><path class="n-hhsg8tm"/></g>`,
		"fallback": "uix-sharp:backdrop-stand",
	});
}

export default Component;
