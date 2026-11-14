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
		"content": `<style>.iy2fhwbme {
  d: path("M16.5 16.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM9.25 6.5l7.5 7.5M6.5 9.25l7.5 7.5m-10-9a3.75 2 0 1 0 7.5 0a3.75 2 0 1 0-7.5 0Zm2.75-.25h.01m1.99.75h.01");
}

.lihvvebad {
  d: path("M14 18.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lihvvebad"/><path class="iy2fhwbme"/></g>`,
		"fallback": "uix-sharp:bone-marrow",
	});
}

export default Component;
