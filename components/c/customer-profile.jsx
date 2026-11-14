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
		"content": `<style>.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbuof97tt {
  d: path("M6.25 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-1 7.5c0-1.5 1.5-2.5 3.25-2.5s3.25 1 3.25 2.5m2.75-7h4m-4 4h3");
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="wbuof97tt"/></g>`,
		"fallback": "uix-sharp:customer-profile",
	});
}

export default Component;
