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
		"content": `<style>.yh9w8vbzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4c-2-2-7-2.5-7 3c0 3.5 1.5 5 2.25 7.5l1 4c.25 1 1.5 1 1.75 0l1-4.5c.25-1 1.75-1 2 0l1 4.5c.25 1 1.5 1 1.75 0l1-4C15 12 16.5 10.5 16.5 7c0-5.5-5-5-7-3ZM19 16q.5 2.5 3 3q-2.5.5-3 3q-.5-2.5-3-3q2.5-.5 3-3Z");
}
</style><path class="yh9w8vbzs"/>`,
		"fallback": "uix-sharp:deep-cleaning",
	});
}

export default Component;
