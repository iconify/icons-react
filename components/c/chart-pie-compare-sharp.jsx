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
		"content": `<style>.hmr_fbl2a {
  d: path("M13.5 2.75a7.75 7.75 0 0 1 7.75 7.75H13.5Z");
}

.ky05amz3v {
  d: path("M10.5 5.75a7.75 7.75 0 1 0 7.75 7.75H10.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ky05amz3v"/><path class="hmr_fbl2a"/></g>`,
		"fallback": "iconoven:chart-pie-compare-sharp",
	});
}

export default Component;
