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
		"content": `<style>.l3c8gmbjd {
  d: path("M14.25 6a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM5 8h10m2-2h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wr_x3vb4r {
  d: path("m5 8l1.5-3.5h7L15 8v12a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 20Z");
}
</style><g class="ulnmmdpxh"><path class="wr_x3vb4r"/><path class="l3c8gmbjd"/></g>`,
		"fallback": "uix-sharp:can-seamer",
	});
}

export default Component;
