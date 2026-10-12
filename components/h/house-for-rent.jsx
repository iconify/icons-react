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
		"content": `<style>.a__nth3my {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.75v-9.2q0-1 .78-1.62l5.69-4.55q.78-.63 1.56 0l5.69 4.55q.78.62.78 1.62v.7a7 7 0 0 0-7 7v1.5q0 1-1 1h-5.5q-1 0-1-1m17.75-1.5a3.25 3.25 0 0 1-5.7 2.13m-.8-2.13a3.25 3.25 0 0 1 5.7-2.13m-4.95 6.13V19.4h1.85m3.15-6.15v1.85H17.9");
}
</style><path class="a__nth3my"/>`,
		"fallback": "iconoven:house-for-rent",
	});
}

export default Component;
