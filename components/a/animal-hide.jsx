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
		"content": `<style>.png4c5btn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 9.5l19-4.75M4.5 9v10.5m15-14.25V19.5m-17 0h19M9 11.5h6a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 13A1.5 1.5 0 0 1 9 11.5");
}
</style><path class="png4c5btn"/>`,
		"fallback": "uix:animal-hide",
	});
}

export default Component;
