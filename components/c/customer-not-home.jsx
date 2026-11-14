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
		"content": `<style>.di2s28qxc {
  d: path("M17.016 21H4V11l1.475-1.198m4.346-3.531L12 4.5l8 6.5v5.084");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xi0zp4j-h {
  d: path("M14.5 18.6V21h-5v-7h.3M4 4.5L20 20");
}
</style><g class="ulnmmdpxh"><path class="di2s28qxc"/><path class="xi0zp4j-h"/></g>`,
		"fallback": "uix-sharp:customer-not-home",
	});
}

export default Component;
