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
		"content": `<style>.sy6_-x4zx {
  d: path("M11.6 21H3V3h12.5v9.9M6 7.5h6m-6 4h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vza7q9b5e {
  d: path("M6.75 21v-4.5H10V21m5.25-5.25H20a1 1 0 0 1 1 1v.5h1v2h-1v.5a1 1 0 0 1-1 1h-4.75a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="sy6_-x4zx"/><path class="vza7q9b5e"/></g>`,
		"fallback": "uix-sharp:battery-storage-site",
	});
}

export default Component;
