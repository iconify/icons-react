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
		"content": `<style>.rdiv_5b1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7v7a2 2 0 0 0 4 0V5.5a3.5 3.5 0 0 0-7 0V14a5 5 0 0 0 10 0V8m4.5 6.75q.5 2.75 3.25 3.25q-2.75.5-3.25 3.25q-.5-2.75-3.25-3.25q2.75-.5 3.25-3.25Z");
}
</style><path class="rdiv_5b1y"/>`,
		"fallback": "uix-sharp:ai-attach",
	});
}

export default Component;
