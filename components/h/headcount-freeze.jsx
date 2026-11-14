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
		"content": `<style>.lopqeebnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-3.54 2.742-5.905 6.492-6.402m7.258-.848v8m-3.5-6l7 4m-7 0l7-4m-4.5-2l1 1l1-1m-2 8l1-1l1 1m2-6.75l-.25 1.25l1.25.25m0 2.5l-1.25.25l.25 1.25m-6-5.5l.25 1.25l-1.25.25m0 2.5l1.25.25l-.25 1.25");
}
</style><path class="lopqeebnd"/>`,
		"fallback": "uix-sharp:headcount-freeze",
	});
}

export default Component;
