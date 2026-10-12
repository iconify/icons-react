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
		"content": `<style>.rui5qnu9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25a5.25 5.25 0 0 1 10.5 0a2.25 2.25 0 0 0 4.5 0v-3.5a1.5 1.5 0 0 1 3 0v3.5a5.25 5.25 0 0 1-10.5 0a2.25 2.25 0 0 0-4.5 0a1.5 1.5 0 0 1-3 0M8 8.75v1.5m7.5 6v1.5m3-6H20m-17 9.5h18");
}
</style><path class="rui5qnu9v"/>`,
		"fallback": "iconoven:earthworm",
	});
}

export default Component;
