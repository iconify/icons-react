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
		"content": `<style>.aou_y8cci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.5h13m-6.5 0V20m-4.5 0h9m-14-8.5l3-7l3 7a3 3 0 0 1-6 0m13 0l3-7l3 7a3 3 0 0 1-6 0");
}
</style><path class="aou_y8cci"/>`,
		"fallback": "uix:compounding-scale",
	});
}

export default Component;
