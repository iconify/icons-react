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
		"content": `<style>.nw8wqnbwm {
  d: path("M2.5 6.5v3c0 1.75 3.75 3 8.5 3s8.5-1.25 8.5-3v-3M3.5 12v5.5c0 2.25 3.5 3.75 7.5 3.75l.196-.001M18.5 12.65V12M14 20.25h8m-6.5 0v-3.5c0-1 .75-1.75 1.75-1.25l.75.5l.75-.5c1-.5 1.75.25 1.75 1.25v3.5");
}

.tftf-jwpq {
  d: path("M2.5 6.5a8.5 3 0 1 0 17 0a8.5 3 0 1 0-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tftf-jwpq"/><path class="nw8wqnbwm"/></g>`,
		"fallback": "uix-sharp:hat-box",
	});
}

export default Component;
