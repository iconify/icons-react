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
		"content": `<style>.v2177xb3m {
  d: path("M20.25 18.75c0-7.75-3.75-12.25-7.5-12.25s-6 4-6 9.25");
}

.vjoucgx_w {
  d: path("m2.75 11.75l4 4l4-4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="v2177xb3m"/><path class="vjoucgx_w"/></g>`,
		"fallback": "iconoven:arrow-curve-left-sharp",
	});
}

export default Component;
