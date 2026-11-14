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
		"content": `<style>.d7x_2crvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9a6 4.5 0 1 0 12 0A6 4.5 0 1 0 9 9m1.75 4.25l-2.5 2.5m-.129.129za1.5 1.5 0 0 1 0 2.121L6 20.121a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121L6 15.879a1.5 1.5 0 0 1 2.121 0m2.636-2.636l8.486-8.486m-7.425 1.061l6.364 6.364");
}
</style><path class="d7x_2crvx"/>`,
		"fallback": "uix:badminton-racket",
	});
}

export default Component;
