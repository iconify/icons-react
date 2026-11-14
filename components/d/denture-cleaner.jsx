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
		"content": `<style>.h01r_5fde {
  d: path("m4.5 3l2 18h11l2-18");
}

.tai9yxj4a {
  d: path("M8.5 14.5c0 4.5 7 4.5 7 0M8 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h01r_5fde"/><path class="tai9yxj4a"/></g>`,
		"fallback": "uix-sharp:denture-cleaner",
	});
}

export default Component;
