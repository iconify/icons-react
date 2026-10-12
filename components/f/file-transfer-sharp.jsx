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
		"content": `<style>.ormgmjbpi {
  d: path("M13.75 2.75v5.5h5.5m-10.75 4h6.75m-2-1.75l2 1.75l-2 1.75m2.25 2.5H8.75m2-1.75l-2 1.75l2 1.75");
}

.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="ormgmjbpi"/></g>`,
		"fallback": "iconoven:file-transfer-sharp",
	});
}

export default Component;
