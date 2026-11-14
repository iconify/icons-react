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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vmqb-88ml {
  d: path("m7 9.5l2.25-1.25L11 9.75m-1.75-1.5l-1 2.75L10 12.75M8.25 11L6 12.5m-.5 5h6.25M10 15.75l1.75 1.75L10 19.25m4.5-.75v-13h4v13");
}

.ynig32bsu {
  d: path("M2.5 2.5h19v19h-19Zm7 3.5h.01");
}
</style><g class="ulnmmdpxh"><path class="ynig32bsu"/><path class="vmqb-88ml"/></g>`,
		"fallback": "uix-sharp:escapeway-sign",
	});
}

export default Component;
