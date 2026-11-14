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
		"content": `<style>.bqrdqh2ny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16.5L8 13a2.12 2.12 0 0 1 3 0a2.12 2.12 0 0 1 0 3l-3.5 3.5a2.12 2.12 0 0 1-3 0a2.12 2.12 0 0 1 0-3M11 13l3.5-3.5m0 0c0-4 2.5-6.5 5.25-6.5c1.75 0 1.75 2.5-.25 4.25");
}
</style><path class="bqrdqh2ny"/>`,
		"fallback": "uix:dental-scaler",
	});
}

export default Component;
