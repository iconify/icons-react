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
		"content": `<style>.l-vq6cdiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5h11m-9.5 0a4 4 0 0 1 8 0m-7.25 0v1.25a3.25 3.25 0 0 0 6.5 0V7.5m-1.539 13H4c0-3 3-5.5 6.5-5.5c1.137 0 2.221.264 3.167.723M15 18.5h7v3h-7Zm4 0v-3h2.5");
}
</style><path class="l-vq6cdiv"/>`,
		"fallback": "uix-sharp:concrete-finisher",
	});
}

export default Component;
