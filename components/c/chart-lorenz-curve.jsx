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
		"content": `<style>.tmp0jr96l {
  d: path("M3.5 3.5v17h17m-17 0l17-17");
}

.u0j_57b4d {
  d: path("M3.5 20.5q12.5.5 17-17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tmp0jr96l"/><path class="u0j_57b4d"/></g>`,
		"fallback": "uix-sharp:chart-lorenz-curve",
	});
}

export default Component;
