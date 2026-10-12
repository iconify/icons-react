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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yduoq2hfp {
  d: path("m7 7.25l2.25 9.5L12 9l2.75 7.75L17 7.25m-10.75 5h11.5");
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="yduoq2hfp"/></g>`,
		"fallback": "iconoven:currency-won-sharp",
	});
}

export default Component;
