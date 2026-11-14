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
		"content": `<style>.kedl3gynz {
  d: path("M15.75 12.75L18 10.5l2.25 2.25");
}

.scohw9bdu {
  d: path("M2.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM16 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-5.75 13.5q7.5 0 7.75-8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="scohw9bdu"/><path class="kedl3gynz"/></g>`,
		"fallback": "uix-sharp:assist-pass",
	});
}

export default Component;
