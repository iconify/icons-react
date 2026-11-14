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
		"content": `<style>.klpny775a {
  d: path("M5 2.5h14v19H5Zm0 6h14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxpb_bbre {
  d: path("M9 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM8 5.5h.01");
}
</style><g class="ulnmmdpxh"><path class="klpny775a"/><path class="uxpb_bbre"/></g>`,
		"fallback": "uix-sharp:category-appliances",
	});
}

export default Component;
