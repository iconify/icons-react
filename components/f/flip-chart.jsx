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
		"content": `<style>.o8jimccqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14v12H5Zm7 11v7.5m0-4l-5 4m5-4l5 4M8 7h8m-8 3.5h5");
}
</style><path class="o8jimccqx"/>`,
		"fallback": "uix-sharp:flip-chart",
	});
}

export default Component;
