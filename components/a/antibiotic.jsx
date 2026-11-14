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
		"content": `<style>.g-yfjv2nv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.51 4.49za3 3 0 0 1 0 4.242L8.732 16.51a3 3 0 0 1-4.242 0a3 3 0 0 1 0-4.242l7.778-7.778a3 3 0 0 1 4.242 0M8.379 8.379l4.242 4.242M16 18.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m2.25-3.75V16m0 4.5V22m-3.75-3.75H16m4.5 0H22");
}
</style><path class="g-yfjv2nv"/>`,
		"fallback": "uix:antibiotic",
	});
}

export default Component;
