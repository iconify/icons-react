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
		"content": `<style>.fgwobg64d {
  d: path("M13 2.5v5h5m-7.5 10V9m-3 3l3-3l3 3m1.75 4a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.to0pipbkq {
  d: path("M13.671 21.5H3.5v-19H13l5 5v2.929");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zx_hqsb7y {
  d: path("M16.5 18.25v3l1.5-.75l1.5.75v-3");
}
</style><g class="ulnmmdpxh"><path class="to0pipbkq"/><path class="fgwobg64d"/><path class="zx_hqsb7y"/></g>`,
		"fallback": "uix-sharp:document-upload-official",
	});
}

export default Component;
