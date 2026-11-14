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
		"content": `<style>.syp7axonp {
  d: path("M7.5 19.5v-7a4.5 4.5 0 0 1 9 0v5M12 21v-8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zah8ppbcu {
  d: path("M4 16v-3.5a8 8 0 0 1 16 0v3");
}
</style><g class="ulnmmdpxh"><path class="zah8ppbcu"/><path class="syp7axonp"/></g>`,
		"fallback": "uix-sharp:fingerprint",
	});
}

export default Component;
