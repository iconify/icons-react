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
		"content": `<style>.h6e-0l1oa {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v9m0-17.5V10M9.75 6v2M15 17.5h6v4h-6Zm1.25 0v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5n2fo62c {
  d: path("M12.224 20.882L12 21l-8.5-4.5v-9L12 3l8.5 4.5v4.965");
}
</style><g class="ulnmmdpxh"><path class="x5n2fo62c"/><path class="h6e-0l1oa"/></g>`,
		"fallback": "uix-sharp:cabinet-lock",
	});
}

export default Component;
