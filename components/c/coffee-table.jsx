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
		"content": `<style>.of49adcwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 11H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 8m1 3v6m14-6v6M8.25 11v3.5m7.5-3.5v3.5");
}
</style><path class="of49adcwr"/>`,
		"fallback": "uix:coffee-table",
	});
}

export default Component;
