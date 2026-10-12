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
		"content": `<style>.f_362pbxn {
  cx: 12px;
  cy: 12px;
  r: 7px;
}

.lf940mbnz {
  cx: 12px;
  cy: 12px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zt7gkkpde {
  d: path("M12 2.75v5.5m0 7.5v5.5M2.75 12h5.5m7.5 0h5.5");
}
</style><g class="x2cwu0gfd"><circle class="f_362pbxn"/><path class="zt7gkkpde"/><circle class="lf940mbnz"/></g>`,
		"fallback": "iconoven:crosshair-sharp",
	});
}

export default Component;
