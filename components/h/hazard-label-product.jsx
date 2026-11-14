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
		"content": `<style>.hq1_f5beh {
  d: path("m18 13.75l4 4l-4 4l-4-4Zm0 2.75v2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xh15i7v9w {
  d: path("M13.774 21.5H5v-10c0-2 1.5-3 3.5-3.5V5.5h6V8c1.455.364 2.645.992 3.186 2.077M8 2.5h7v3H8Zm-3 11h9.3");
}
</style><g class="ulnmmdpxh"><path class="xh15i7v9w"/><path class="hq1_f5beh"/></g>`,
		"fallback": "uix-sharp:hazard-label-product",
	});
}

export default Component;
