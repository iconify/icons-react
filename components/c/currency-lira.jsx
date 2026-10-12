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
		"content": `<style>.od92cy9zc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4v16c3.9 0 7-3.1 7-7.5M6.5 10.4l7.5-3m-7.5 6.23l7.5-3");
}
</style><path class="od92cy9zc"/>`,
		"fallback": "iconoven:currency-lira",
	});
}

export default Component;
