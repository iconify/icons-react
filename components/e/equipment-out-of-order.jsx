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
		"content": `<style>.klf5vzbha {
  d: path("M3.5 21.5v-19h11V12M9 2.5V10");
}

.rwn_p9bfk {
  d: path("M6.5 10h5v6h-5ZM18 13.25l4 8.25h-8Zm0 5.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="klf5vzbha"/><path class="rwn_p9bfk"/></g>`,
		"fallback": "uix-sharp:equipment-out-of-order",
	});
}

export default Component;
