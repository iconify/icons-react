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
		"content": `<style>.cy6nzyw5f {
  d: path("M8 13.5c1.5-.75 3-.5 4 .5c1-1 2.5-1.25 4-.5V18c-1.5-.75-3-.5-4 .5c-1-1-2.5-1.25-4-.5Zm4 .5v4.5");
}

.olqai6pvw {
  d: path("M4.5 7.5h15l-.75 12a2 2 0 0 1-2 2h-9.5a2 2 0 0 1-2-2Zm4.5 0V6a3 3 0 0 1 6 0v1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="olqai6pvw"/><path class="cy6nzyw5f"/></g>`,
		"fallback": "uix-sharp:campus-bookstore",
	});
}

export default Component;
