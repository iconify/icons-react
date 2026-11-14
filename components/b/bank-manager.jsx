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
		"content": `<style>.olzkx_9do {
  d: path("M11 13.5h2l-.25 1.5L14 19.5l-2 2l-2-2l1.25-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wnv98nbvk {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-5 15c0-5 3.5-8 8.5-8s8.5 3 8.5 8");
}
</style><g class="ulnmmdpxh"><path class="wnv98nbvk"/><path class="olzkx_9do"/></g>`,
		"fallback": "uix-sharp:bank-manager",
	});
}

export default Component;
