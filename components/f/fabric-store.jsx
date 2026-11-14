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
		"content": `<style>.f8rc1nb1v {
  d: path("M3.75 15a1.75 3 0 1 0 3.5 0a1.75 3 0 1 0-3.5 0ZM10 18l-1 3.5h10L18 18M5.5 15h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9xc33scn {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M5.5 12H18a1.75 3 0 0 1 0 6H5.5");
}
</style><g class="ulnmmdpxh"><path class="v9xc33scn"/><path class="f8rc1nb1v"/></g>`,
		"fallback": "uix-sharp:fabric-store",
	});
}

export default Component;
