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
		"content": `<style>.h67_j8bpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 3H7l5 5.75l-5 5.75h10m-12 3h14m-14 3h14");
}
</style><path class="h67_j8bpv"/>`,
		"fallback": "uix-sharp:grand-total",
	});
}

export default Component;
