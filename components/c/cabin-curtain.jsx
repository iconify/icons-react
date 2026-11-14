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
		"content": `<style>.iy6u4us8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m18-19v19M3 4.5h18m-14.5 0V20q2.75 1.75 5.5 0q2.75 1.75 5.5 0V4.5m-5.5 0v12.75");
}
</style><path class="iy6u4us8n"/>`,
		"fallback": "uix:cabin-curtain",
	});
}

export default Component;
