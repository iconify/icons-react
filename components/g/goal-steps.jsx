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
		"content": `<style>.otz_sikhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h4.5V16H12v-4.5h4.5V7h2m0 0V3.5m0 0l2.25 1l-2.25 1Z");
}
</style><path class="otz_sikhq"/>`,
		"fallback": "uix-sharp:goal-steps",
	});
}

export default Component;
