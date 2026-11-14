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
		"content": `<style>.q289v3baw {
  d: path("M2.5 10.5L16 3l4 4.5l-14 7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uo93khfgd {
  d: path("m12 11.5l4 8.5H8Zm0-3h.01");
}
</style><g class="ulnmmdpxh"><path class="q289v3baw"/><path class="uo93khfgd"/></g>`,
		"fallback": "uix-sharp:center-of-mass",
	});
}

export default Component;
