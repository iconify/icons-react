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
		"content": `<style>.g26tobccd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13L9 3.5l4.25 6l2.5-3L21.5 13M3 16.75q2.25-1.25 4.5 0t4.5 0t4.5 0t4.5 0M3 20.5q2.25-1.25 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="g26tobccd"/>`,
		"fallback": "uix-sharp:dehaze",
	});
}

export default Component;
