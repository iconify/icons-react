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
		"content": `<style>.dw_f01qwq {
  d: path("M8.75 8.75h12.5v12.5H8.75zm6.25 0v12.5M8.75 15h12.5");
}

.h4or-zwdo {
  d: path("M2.75 14.75v-12h12M5.75 18V5.75H18");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h4or-zwdo"/><path class="dw_f01qwq"/></g>`,
		"fallback": "iconoven:feature-map-sharp",
	});
}

export default Component;
