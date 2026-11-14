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
		"content": `<style>.k8bxno7qf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M4 3.5V21h4q-2.5-6-1.5-9q3-5 3.5-8.5m10 0V21h-4q2.5-6 1.5-9q-3-5-3.5-8.5");
}
</style><path class="k8bxno7qf"/>`,
		"fallback": "uix-sharp:curtains-open",
	});
}

export default Component;
