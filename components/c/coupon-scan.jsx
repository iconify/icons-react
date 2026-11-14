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
		"content": `<style>.hi0s5kbqd {
  d: path("M6.25 7.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm9 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.lcub5vgbu {
  d: path("M4.5 3h7l9.5 9.5l-1 1h-5.75a2 2 0 0 0-2 2v5l-.75.5L3 11.5v-7A1.5 1.5 0 0 1 4.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lcub5vgbu"/><path class="hi0s5kbqd"/></g>`,
		"fallback": "uix-sharp:coupon-scan",
	});
}

export default Component;
