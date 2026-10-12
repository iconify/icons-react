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
		"content": `<style>.a2lxl3bwz {
  d: path("M15.75 3.75h-7.5v17.5h12.5V8.75Z");
}

.i9edhf24b {
  d: path("M15.75 3.75v5h5M5.25 6v13M2.75 8.25v8.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="a2lxl3bwz"/><path class="i9edhf24b"/></g>`,
		"fallback": "iconoven:file-version-sharp",
	});
}

export default Component;
