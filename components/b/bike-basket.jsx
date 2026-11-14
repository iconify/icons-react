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
		"content": `<style>.ftac_rwpb {
  d: path("M6.25 17.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm4.25 0L7.75 4.5m-3.25 0h5M11 6h9.5l-1 4.5H12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y5nkjiugr {
  d: path("M13.75 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="ftac_rwpb"/><path class="y5nkjiugr"/></g>`,
		"fallback": "uix-sharp:bike-basket",
	});
}

export default Component;
