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
		"content": `<style>.g944xoblh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5v19M2.5 6H21m-8.5 0H19a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 19 14h-6.5a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 12.5 6M4 21.5h6");
}
</style><path class="g944xoblh"/>`,
		"fallback": "uix:courtesy-flag",
	});
}

export default Component;
