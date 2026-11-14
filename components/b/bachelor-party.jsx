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
		"content": `<style>.rx9_3qzjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.25 8.25l1.87 1.007a2.63 2.63 0 0 1 1.38 2.311v.864a2.63 2.63 0 0 1-1.38 2.311L6.25 15.75A2.205 2.205 0 0 1 3 13.809v-3.618A2.205 2.205 0 0 1 6.25 8.25m11.5 0l-1.87 1.007a2.63 2.63 0 0 0-1.38 2.311v.864a2.63 2.63 0 0 0 1.38 2.311l1.87 1.007A2.205 2.205 0 0 0 21 13.809v-3.618a2.205 2.205 0 0 0-3.25-1.941M12 9.5za2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5");
}
</style><path class="rx9_3qzjb"/>`,
		"fallback": "uix:bachelor-party",
	});
}

export default Component;
