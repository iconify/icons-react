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
		"content": `<style>.a95yrp1fb {
  d: path("M12 12.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 1 0 0-4.5m0-9.75v3M5.5 4.5l1.75 2m11.25-2l-1.75 2m-14 3.5H5m16.25 0H19");
}

.oce97cccv {
  d: path("M7.25 8.75h9.5v12.5h-9.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oce97cccv"/><path class="a95yrp1fb"/></g>`,
		"fallback": "iconoven:flashing-doorbell-sharp",
	});
}

export default Component;
