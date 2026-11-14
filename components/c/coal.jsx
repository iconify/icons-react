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
		"content": `<style>.inhyoqqqm {
  d: path("M8.5 10.5L12 14v5.5m0-5.5l7.5-5.5");
}

.mls8q-b8u {
  d: path("M2.5 19.5L4 13l4.5-2.5L11 6l5-1.5l3.5 4l2 5.5l-1.5 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mls8q-b8u"/><path class="inhyoqqqm"/></g>`,
		"fallback": "uix-sharp:coal",
	});
}

export default Component;
