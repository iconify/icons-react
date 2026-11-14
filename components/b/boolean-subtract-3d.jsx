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
		"content": `<style>.ppmlg_bej {
  d: path("m12 2.5l4 2.25A4.85 4.85 0 0 0 20.25 12v4.75L12 21.5l-8.25-4.75v-9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w42p7ebip {
  d: path("M3.75 7.25L12 12l4-2.25M12 12v9.5");
}
</style><g class="ulnmmdpxh"><path class="ppmlg_bej"/><path class="w42p7ebip"/></g>`,
		"fallback": "uix-sharp:boolean-subtract-3d",
	});
}

export default Component;
