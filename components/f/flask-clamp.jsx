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
		"content": `<style>.ds4lz5bcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 3.5v6.25a5.5 5.5 0 1 0 3 0V3.5m-12-1v19m0-15h9m-11 15h6");
}
</style><path class="ds4lz5bcf"/>`,
		"fallback": "uix:flask-clamp",
	});
}

export default Component;
