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
		"content": `<style>.h937b7isn {
  d: path("M11.5 18.5c-1.75-1.15-2.75-2.25-2.75-3.4a1.375 1.375 0 0 1 2.75-.35a1.375 1.375 0 0 1 2.75.35c0 1.15-1 2.25-2.75 3.4Z");
}

.n405fcbkm {
  d: path("M5.5 15.25v-9.5h3v1.5v-4h3v1.5v-2h3v2.5v-1.5h3V13l1.25-1.25a1.4 1.4 0 0 1 1.98 1.98L17 18.05a6 6 0 0 1-4.75 3.2h-.75a6 6 0 0 1-6-6Zm3-7.5V11m3-5.75V11m3-5.25V11");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n405fcbkm"/><path class="h937b7isn"/></g>`,
		"fallback": "iconoven:human-rights-sharp",
	});
}

export default Component;
