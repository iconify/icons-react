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
		"content": `<style>.oq2xexblz {
  d: path("M20.5 6.5H4m3-3l-3 3l3 3M2.5 13H7v4.5H2.5Zm7.25 0h4.5v4.5h-4.5ZM17 13h4.5v4.5H17Z");
}

.osqky4cvz {
  fill: currentColor;
  d: path("M3.5 15.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm7.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oq2xexblz"/><path class="osqky4cvz"/></g>`,
		"fallback": "uix-sharp:data-backfill",
	});
}

export default Component;
