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
		"content": `<style>.aau43sk9w {
  d: path("M10 4.75h4v6.75h-4zm4.5 12.5H18");
}

.v65jr_b0s {
  d: path("M2.75 4.75h18.5v16.5H2.75zm0 4.5h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="v65jr_b0s"/><path class="aau43sk9w"/></g>`,
		"fallback": "iconoven:box-open-sharp",
	});
}

export default Component;
