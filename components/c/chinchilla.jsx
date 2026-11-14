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
		"content": `<style>.u_nmsbcje {
  d: path("M3.5 14a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zq-lwyuor {
  d: path("M4.25 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM12 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM16.25 18C20.5 19.5 22 15 20 12.5m-7.5 0h.01");
}
</style><g class="ulnmmdpxh"><path class="u_nmsbcje"/><path class="zq-lwyuor"/></g>`,
		"fallback": "uix-sharp:chinchilla",
	});
}

export default Component;
