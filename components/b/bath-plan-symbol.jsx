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
		"content": `<style>.mhuvow97a {
  d: path("M2.5 5.5h19v13h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zbm237cvn {
  d: path("M5.25 8.25h13.5v7.5H5.25ZM15.5 12h.01");
}
</style><g class="ulnmmdpxh"><path class="mhuvow97a"/><path class="zbm237cvn"/></g>`,
		"fallback": "uix-sharp:bath-plan-symbol",
	});
}

export default Component;
