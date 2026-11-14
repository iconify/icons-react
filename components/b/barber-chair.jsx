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
		"content": `<style>.dvmjwdbuw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.5V14h10m-10-4h8m-2.5 4v6.5m-4 0h8m.5-6.5l2.5 4h2");
}
</style><path class="dvmjwdbuw"/>`,
		"fallback": "uix:barber-chair",
	});
}

export default Component;
