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
		"content": `<style>.gp4jt_b7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V14M9 9a3 5 0 1 0 6 0a3 5 0 1 0-6 0m1-3.5l-4-3m8 3l4-3M9 9L4.5 6.5M15 9l4.5-2.5m-7.5 12c2.5-.5 4.5-2 5-4.5");
}
</style><path class="gp4jt_b7t"/>`,
		"fallback": "uix:barley",
	});
}

export default Component;
