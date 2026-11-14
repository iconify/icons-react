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
		"content": `<style>.qyi7-c6de {
  d: path("M18 20.829v.671H4v-19h9l5 5v7.729");
}

.u6wy7cjtk {
  d: path("M13 2.5v5h5M7.5 11h7m-7 4H11m4 3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qyi7-c6de"/><path class="u6wy7cjtk"/></g>`,
		"fallback": "uix-sharp:change-request-remove",
	});
}

export default Component;
