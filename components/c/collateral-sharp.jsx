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
		"content": `<style>.bid424x3h {
  d: path("m2.75 9.5l6-5.25l6 5.25v7.75h-12v-1.5Z");
}

.d4da7x21x {
  cx: 16.75px;
  cy: 16.75px;
  r: 4.5px;
}

.w4-h6rh4t {
  d: path("m18.1 15.57l-.417-.9H15.34v1.04c0 1.46 2.81.73 2.81 2.14v.99h-2.421l-.359-.88");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bid424x3h"/><circle class="d4da7x21x"/><path class="w4-h6rh4t"/></g>`,
		"fallback": "iconoven:collateral-sharp",
	});
}

export default Component;
