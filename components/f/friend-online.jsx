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
		"content": `<style>.g93vh7bpf {
  fill: currentColor;
  d: path("M15.5 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.so1xk_uzd {
  d: path("M6.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-3 14c0-4.5 3.25-7 7-7c1.25 0 2.25.2 3 .5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="so1xk_uzd"/><path class="g93vh7bpf"/></g>`,
		"fallback": "uix-sharp:friend-online",
	});
}

export default Component;
