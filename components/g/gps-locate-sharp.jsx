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
		"content": `<style>.b9fbe6bhi {
  d: path("M12 2.75V5.5m0 13v2.75M2.75 12H5.5m13 0h2.75");
}

.ons53cb4g {
  cx: 12px;
  cy: 12px;
  r: 2.5px;
}

.shvec_xgt {
  cx: 12px;
  cy: 12px;
  r: 6.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="shvec_xgt"/><circle class="ons53cb4g"/><path class="b9fbe6bhi"/></g>`,
		"fallback": "iconoven:gps-locate-sharp",
	});
}

export default Component;
