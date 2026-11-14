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
		"content": `<style>.pdfecpb_k {
  d: path("M11.948 21.47L3.75 16.75v-9.5L12 2.5l8.25 4.75v4.78");
}

.uilbgubdm {
  d: path("M3.75 7.25L12 12l8.25-4.75M12 12v5.3m2.75 3.95V18.5l4-4l2.75 2.75l-4 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pdfecpb_k"/><path class="uilbgubdm"/></g>`,
		"fallback": "uix-sharp:ar-annotation",
	});
}

export default Component;
