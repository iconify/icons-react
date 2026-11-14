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
		"content": `<style>.o01qnvbrv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13V7h5.5v2.5H18q3 0 3 1.75V13Zm0 0l2.25 5.5L7.5 13l2.25 5.5L12 13l2.25 5.5L16.5 13l2.25 5.5L21 13");
}
</style><path class="o01qnvbrv"/>`,
		"fallback": "uix-sharp:crampons",
	});
}

export default Component;
