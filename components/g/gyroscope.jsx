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
		"content": `<style>.gczyiqbiw {
  d: path("M7 11a5 2.75 0 1 0 10 0a5 2.75 0 1 0-10 0Z");
}

.qb81_51-s {
  d: path("M4 11a8 8 0 1 0 16 0a8 8 0 1 0-16 0Zm8-8.75V21.5m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qb81_51-s"/><path class="gczyiqbiw"/></g>`,
		"fallback": "uix-sharp:gyroscope",
	});
}

export default Component;
