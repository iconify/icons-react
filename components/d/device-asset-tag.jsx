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
		"content": `<style>.th5tug-3k {
  d: path("m12 10.586l2.828 2.828L12 16.243l-2.828-2.829Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsz8nwb9b {
  d: path("M3 5h9l9 9l-7 7l-11-9Zm4.5 4.5h.01");
}
</style><g class="ulnmmdpxh"><path class="xsz8nwb9b"/><path class="th5tug-3k"/></g>`,
		"fallback": "uix-sharp:device-asset-tag",
	});
}

export default Component;
