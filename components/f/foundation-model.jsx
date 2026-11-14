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
		"content": `<style>.c0hscwilr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3h6v3h-6ZM4.5 8.75H15v3H4.5ZM14.2 18H2.5v-3.5h12.7m2.8.25q.5 2.75 3.25 3.25q-2.75.5-3.25 3.25q-.5-2.75-3.25-3.25q2.75-.5 3.25-3.25Z");
}
</style><path class="c0hscwilr"/>`,
		"fallback": "uix-sharp:foundation-model",
	});
}

export default Component;
