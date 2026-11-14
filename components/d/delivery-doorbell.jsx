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
		"content": `<style>.ht_opcftd {
  d: path("M5.5 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm.25 7.5h5.5m5.871-9.621a3 3 0 0 1 0 4.242m2.122-6.364a6 6 0 0 1 0 8.486");
}

.lbnew5bmr {
  d: path("M2.5 2.5h11.75v19H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lbnew5bmr"/><path class="ht_opcftd"/></g>`,
		"fallback": "uix-sharp:delivery-doorbell",
	});
}

export default Component;
