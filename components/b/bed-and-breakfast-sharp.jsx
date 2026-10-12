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
		"content": `<style>.dxlzgxf7a {
  d: path("M3 10.75v10.5M3 14h18.25v4.25H3zm16.75 4.25v3M5.5 11h5v3h-5zm6.75-6h6v3a3 3 0 0 1-6 0Z");
}

.iyxto8b-j {
  d: path("M18.25 5.75h2.5v3.5H18.1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dxlzgxf7a"/><path class="iyxto8b-j"/></g>`,
		"fallback": "iconoven:bed-and-breakfast-sharp",
	});
}

export default Component;
