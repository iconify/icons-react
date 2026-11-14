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
		"content": `<style>.ag9mdkbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19L19 18.5q-.5 1-1.5 1H5Zm3 0V6a1 1 0 0 1 1-1h8l3 8M9 9h.01M13 9h.01");
}
</style><path class="ag9mdkbme"/>`,
		"fallback": "uix:boat-cabin",
	});
}

export default Component;
