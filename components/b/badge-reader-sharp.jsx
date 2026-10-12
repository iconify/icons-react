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
		"content": `<style>.ndjdpbbuu {
  d: path("M2.75 8h5.5v8h-5.5zm2 2.25h1.5m5.5-6.5h8.5v16.5h-8.5zm2.75 3.5h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ztcw_fbuw {
  d: path("M13.75 14.25L16 11.699l2.25 2.551");
}
</style><g class="x2cwu0gfd"><path class="ndjdpbbuu"/><path class="ztcw_fbuw"/></g>`,
		"fallback": "iconoven:badge-reader-sharp",
	});
}

export default Component;
