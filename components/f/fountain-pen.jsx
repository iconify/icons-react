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
		"content": `<style>.pnti1ub0t {
  d: path("M10.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM9.5 3.5h5");
}

.s7f3r2_gx {
  d: path("m12 20l-3.5-7.5L10 7h4l1.5 5.5Zm0 0v-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s7f3r2_gx"/><path class="pnti1ub0t"/></g>`,
		"fallback": "uix-sharp:fountain-pen",
	});
}

export default Component;
