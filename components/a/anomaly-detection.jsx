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
		"content": `<style>.vt2d67dys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H7l2.25-6.5l2.5 10.5L14 10h3m1 4.75v3.5M18 21h.01");
}
</style><path class="vt2d67dys"/>`,
		"fallback": "uix-sharp:anomaly-detection",
	});
}

export default Component;
