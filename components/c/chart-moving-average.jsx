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
		"content": `<style>.sqnqte51d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5C8 16.5 13 10 21.5 6M3 14.5h.01m2.49 5h.01M8 13h.01m2.49 4h.01M13 10h.01m2.49 3.5h.01M18 6h.01M21 9.5h.01");
}
</style><path class="sqnqte51d"/>`,
		"fallback": "uix:chart-moving-average",
	});
}

export default Component;
