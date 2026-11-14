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
		"content": `<style>.kswi1cv8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18c-.5 5-4.5 7.5-9 7.5S3.5 17 3 12m1.75 0c0-3.5.75-5.5 1.5-5.5s1.5 2 1.5 5.5m2.75 0c0-4.5.75-7.5 1.5-7.5s1.5 3 1.5 7.5m2.75 0c0-3.5.75-5.5 1.5-5.5s1.5 2 1.5 5.5");
}
</style><path class="kswi1cv8q"/>`,
		"fallback": "uix:eggs-clutch",
	});
}

export default Component;
