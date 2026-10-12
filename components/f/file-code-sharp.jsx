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
		"content": `<style>.mnim1yb7e {
  d: path("M13.75 2.75v5.5h5.5m-9 2.75H9v3.25H8h1v3.25h1.25m3.5-6.5H15v3.25h1h-1v3.25h-1.25");
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
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="mnim1yb7e"/></g>`,
		"fallback": "iconoven:file-code-sharp",
	});
}

export default Component;
