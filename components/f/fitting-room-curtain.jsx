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
		"content": `<style>.xgav2_b7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19M4 3v17c1.5 1 3-.5 4.5.5s3-1 4.5 0V3M8.5 5.5V17m12-14v18.5");
}
</style><path class="xgav2_b7k"/>`,
		"fallback": "uix:fitting-room-curtain",
	});
}

export default Component;
