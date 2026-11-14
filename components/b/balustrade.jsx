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
		"content": `<style>.osh5abe1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19m-19 16h19M4.5 4v3c-1.75 2.5-1.75 7.5 0 10v3m0-13c1.75 2.5 1.75 7.5 0 10m5-13v3c-1.75 2.5-1.75 7.5 0 10v3m0-13c1.75 2.5 1.75 7.5 0 10m5-13v3c-1.75 2.5-1.75 7.5 0 10v3m0-13c1.75 2.5 1.75 7.5 0 10m5-13v3c-1.75 2.5-1.75 7.5 0 10v3m0-13c1.75 2.5 1.75 7.5 0 10");
}
</style><path class="osh5abe1i"/>`,
		"fallback": "uix:balustrade",
	});
}

export default Component;
