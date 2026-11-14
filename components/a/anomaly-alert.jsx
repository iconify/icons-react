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
		"content": `<style>.vct4w44xb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h4L9 3l2.5 14.5l2-6.5h8M18 14.5V18m0 3h.01");
}
</style><path class="vct4w44xb"/>`,
		"fallback": "uix-sharp:anomaly-alert",
	});
}

export default Component;
