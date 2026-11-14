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
		"content": `<style>.tijqe008i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9h5a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-5.5V9m5-5.5V9M12 15v5.5");
}
</style><path class="tijqe008i"/>`,
		"fallback": "uix:data-connector",
	});
}

export default Component;
