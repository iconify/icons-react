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
		"content": `<style>.lwooozmpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.728 6.116l4.5-1.406A1.75 1.75 0 0 1 11.5 6.38v5.24a1.75 1.75 0 0 1-2.272 1.67l-4.5-1.406A1.75 1.75 0 0 1 3.5 10.213V7.787a1.75 1.75 0 0 1 1.228-1.671M7.5 12.75v7.75m-3 0h6m4-15.5l5-2m-5 6h6m-6 4l5 2");
}
</style><path class="lwooozmpy"/>`,
		"fallback": "uix:floodlight",
	});
}

export default Component;
