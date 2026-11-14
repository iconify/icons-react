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
		"content": `<style>.cl7epy49m {
  d: path("M14.75 21.25h6.5L20 19.75V18a2 2 0 0 0-4 0v1.75Z");
}

.d6-zxnbhe {
  d: path("M11.744 20.5H3.5v-10L12 3.25l8.5 7.25v3.356");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d6-zxnbhe"/><path class="cl7epy49m"/></g>`,
		"fallback": "uix-sharp:alarm-system",
	});
}

export default Component;
