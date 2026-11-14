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
		"content": `<style>.ir2tj8bvi {
  d: path("M11.5 2.5v4a2 2 0 0 0 2 2h4m3 5.25h.01m-.01 2.75v5");
}

.kqch6ubtm {
  d: path("M5 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 19V5A2.5 2.5 0 0 1 5 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kqch6ubtm"/><path class="ir2tj8bvi"/></g>`,
		"fallback": "uix-sharp:file-descriptor",
	});
}

export default Component;
