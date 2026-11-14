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
		"content": `<style>.qcw6m6rqv {
  d: path("M8.5 5.5h7v8h-7Zm3.5 0h.01m-1.76 3.25h3.5m-3.5 2.5h2.5m2.75 5.25h.01");
}

.uk14yjhev {
  d: path("M6 21.5V4a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 4v17.5m-15.5 0h19m-6-8h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uk14yjhev"/><path class="qcw6m6rqv"/></g>`,
		"fallback": "uix-sharp:eviction-notice",
	});
}

export default Component;
