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
		"content": `<style>.g170tmvba {
  d: path("M8.75 15h6.5m-2.5-2.5l2.5 2.5l-2.5 2.5");
}

.jn9w2eqls {
  d: path("M5.25 8.75h13.5v12.5H5.25zm6.75 0C9.25 7.5 9.5 3 12 3s2.75 4.5 0 5.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jn9w2eqls"/><path class="g170tmvba"/></g>`,
		"fallback": "iconoven:hall-pass-sharp",
	});
}

export default Component;
