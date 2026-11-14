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
		"content": `<style>.o-3_cob8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21.5V13a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8.5ZM5.5 8V4.5a1 1 0 0 1 1-1H12L14 5l-2 1.5V8ZM7 8v3m3-3v3m8.25 0c0 2.25 1 3.25 3.25 3.25c-2.25 0-3.25 1-3.25 3.25c0-2.25-1-3.25-3.25-3.25c2.25 0 3.25-1 3.25-3.25");
}
</style><path class="o-3_cob8c"/>`,
		"fallback": "uix:cleaning-service",
	});
}

export default Component;
