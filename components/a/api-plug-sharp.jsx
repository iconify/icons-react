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
		"content": `<style>.m3xptqzcr {
  d: path("M12 16.5v4.75h5.25m-7-10h3.5");
}

.nc69-_dxk {
  d: path("M7.75 7.25h9.75V11a5.5 5.5 0 0 1-11 0V7.25zm1.75-4.5v4.5m5-4.5v4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nc69-_dxk"/><path class="m3xptqzcr"/></g>`,
		"fallback": "iconoven:api-plug-sharp",
	});
}

export default Component;
