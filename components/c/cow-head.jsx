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
		"content": `<style>.ep-ay2b3j {
  d: path("M6 17a6 4 0 1 0 12 0a6 4 0 1 0-12 0ZM8.5 6.5c-1.5-.5-3-2-3-4m10 4c1.5-.5 3-2 3-4M9.75 10h.01m4.49 0h.01");
}

.ocsc7rb0u {
  d: path("M7 14.75V11.5H3.5l1.5-3h2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h2l1.5 3H17v3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ocsc7rb0u"/><path class="ep-ay2b3j"/></g>`,
		"fallback": "uix-sharp:cow-head",
	});
}

export default Component;
