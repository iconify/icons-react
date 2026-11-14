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
		"content": `<style>.e80lkwbzd {
  d: path("M10.75 5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm5.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.usnb69u0n {
  d: path("M13.5 9.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm.75 2l-4.5 4.5m0 0l-3-1.5L8 13.25Zm0 0C8 18 6 18.75 3.5 18.5m6.25-2.25c-1 2-1.5 3.5-1.25 5.25m5-1q5-.5 7.5-5m-7 1.25q3-.25 4.5-2.25");
}
</style><g class="ulnmmdpxh"><path class="e80lkwbzd"/><path class="usnb69u0n"/></g>`,
		"fallback": "uix-sharp:bouquet-toss",
	});
}

export default Component;
