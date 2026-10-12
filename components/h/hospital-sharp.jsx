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
		"content": `<style>.hk09bvr2w {
  d: path("M3.75 21.25V11H7V2.75h10V11h3.25v10.25ZM12 5.5V10M9.75 7.75h4.5");
}

.pbu2b0thw {
  d: path("M10.25 21.25V17h3.5v4.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hk09bvr2w"/><path class="pbu2b0thw"/></g>`,
		"fallback": "iconoven:hospital-sharp",
	});
}

export default Component;
