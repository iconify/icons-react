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
		"content": `<style>.py1xsuqve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H5l1.5-2L8 12l2-6.5l2 10l1.5-3.5h1.693m5.6 0h.707M10 2.5h.01m7.99 12V18m0 3h.01");
}
</style><path class="py1xsuqve"/>`,
		"fallback": "uix-sharp:anomaly-score",
	});
}

export default Component;
