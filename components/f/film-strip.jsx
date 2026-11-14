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
		"content": `<style>.k-lsnxb-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11A3.5 3.5 0 0 1 21 6v12a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18V6a3.5 3.5 0 0 1 3.5-3.5m1 0v19m9-19v19M3 12h18M3 7h4.5M3 17h4.5m9-10H21m-4.5 10H21");
}
</style><path class="k-lsnxb-r"/>`,
		"fallback": "uix:film-strip",
	});
}

export default Component;
