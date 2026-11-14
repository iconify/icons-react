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
		"content": `<style>.c3g3ws_0h {
  d: path("M9 7V3.5h3.5V7m2.75 0V4.75h3.25V7");
}

.rq_jubcsi {
  d: path("M2.5 3.5H5L7.5 15h11l2.25-8h-15M7.5 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rq_jubcsi"/><path class="c3g3ws_0h"/></g>`,
		"fallback": "uix-sharp:cart-full",
	});
}

export default Component;
