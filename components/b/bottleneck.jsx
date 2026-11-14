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
		"content": `<style>.b-3c2vw_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5C8 4.5 8.5 9 12 9s4-4.5 9.5-4.5m-19 15c5.5 0 6-4.5 9.5-4.5s4 4.5 9.5 4.5M6 12h11m-2-2l2 2l-2 2");
}
</style><path class="b-3c2vw_v"/>`,
		"fallback": "uix-sharp:bottleneck",
	});
}

export default Component;
