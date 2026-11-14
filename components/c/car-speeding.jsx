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
		"content": `<style>.gdyzmbc6q {
  d: path("M9.5 15.5H8V12l2.5-1.5L13 7h4.5l2.5 3.5l1.5.75v4.25h-1m-7 0h3");
}

.nt_q6sb4u {
  d: path("M9.5 15.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2.5 9H7m-4.5 3H5m-2.5 3H5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gdyzmbc6q"/><path class="nt_q6sb4u"/></g>`,
		"fallback": "uix-sharp:car-speeding",
	});
}

export default Component;
