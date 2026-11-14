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
		"content": `<style>.gx4sgqfsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H7l2.25-6.5l2.5 10.5L14 10h3m1 4.75v3.5M18 21h.01");
}
</style><path class="gx4sgqfsz"/>`,
		"fallback": "uix:anomaly-detection",
	});
}

export default Component;
