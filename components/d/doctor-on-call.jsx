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
		"content": `<style>.cstuxyrdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 2.5l1.5 1v4a4.5 4.5 0 0 0 9 0v-4l1.5-1m-6 9.5v3.5m-3 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0M14 15q0-1 1-1h1.5l1 2.5l-1.5 1.25q1.25 1.75 3 2.75l1.25-1.5l1.25.75v.75q0 1-1 1q-6.5 0-6.5-6.5");
}
</style><path class="cstuxyrdz"/>`,
		"fallback": "uix:doctor-on-call",
	});
}

export default Component;
