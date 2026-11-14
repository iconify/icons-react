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
		"content": `<style>.q__slhuuk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18c0 5.5-4 8.5-9 8.5s-9-3-9-8.5m11.5 2.5l5-9.5m-13 4.5C6.5 5 9 3 13 3c0 3.5-2.5 5.5-6.5 5.5");
}
</style><path class="q__slhuuk"/>`,
		"fallback": "uix:herbal-remedy",
	});
}

export default Component;
