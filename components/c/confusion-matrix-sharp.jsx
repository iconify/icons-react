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
		"content": `<style>.s6vwc8bde {
  d: path("M5.25 5.25h16v16h-16zm8 0v16m-8-8h16");
}

.v1jljce8r {
  d: path("M7.75 7.75h3v3h-3zm8 8h3v3h-3zm-13-8.25V11M7.5 2.75H11");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="s6vwc8bde"/><path class="v1jljce8r"/></g>`,
		"fallback": "iconoven:confusion-matrix-sharp",
	});
}

export default Component;
