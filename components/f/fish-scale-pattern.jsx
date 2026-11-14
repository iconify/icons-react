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
		"content": `<style>.e_h-7bcrr {
  d: path("M9.5 9.5q2 2.5 0 5m3.5-5q2 2.5 0 5m-7-3h.01");
}

.sr_sgj-rs {
  d: path("M2.5 12c3.5-7.5 12-7.5 15 0l4-4v8l-4-4c-3 7.5-11.5 7.5-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sr_sgj-rs"/><path class="e_h-7bcrr"/></g>`,
		"fallback": "uix-sharp:fish-scale-pattern",
	});
}

export default Component;
