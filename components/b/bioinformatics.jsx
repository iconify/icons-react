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
		"content": `<style>.e-7e6lbcn {
  d: path("M9 3c0 4.5 6 4.5 6 9s-6 4.5-6 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpi_duy8f {
  d: path("M15 3c0 4.5-6 4.5-6 9s6 4.5 6 9m-6-9h6M6 8l-3.5 4L6 16m12-8l3.5 4l-3.5 4");
}
</style><g class="ulnmmdpxh"><path class="e-7e6lbcn"/><path class="zpi_duy8f"/></g>`,
		"fallback": "uix-sharp:bioinformatics",
	});
}

export default Component;
