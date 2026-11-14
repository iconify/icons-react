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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.p5zvfc-vg {
  d: path("m3 6.75l4.5 4l4.5-4l4.5 4l4.5-4m-18 6.5l4.5 4l4.5-4l4.5 4l4.5-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="p5zvfc-vg"/></g>`,
		"fallback": "uix-sharp:chevron-swatch",
	});
}

export default Component;
