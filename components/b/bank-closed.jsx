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
		"content": `<style>.flswpabaq {
  d: path("M2.5 2.5h19v3h-19Zm1.5 3V15h16V5.5M4 8.25h16M4 11h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wag1mbb0t {
  d: path("M10.5 18.5v-3a1.5 1.5 0 0 1 3 0v3m-4.25 0h5.5V22h-5.5Z");
}
</style><g class="ulnmmdpxh"><path class="flswpabaq"/><path class="wag1mbb0t"/></g>`,
		"fallback": "uix-sharp:bank-closed",
	});
}

export default Component;
