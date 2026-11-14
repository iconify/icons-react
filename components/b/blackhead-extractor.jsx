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
		"content": `<style>.lgbr8o9iq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m1 2.5L12 12m-.038.038za1.5 1.5 0 0 1 0 2.121l-5.303 5.303a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121l5.303-5.303a1.5 1.5 0 0 1 2.121 0");
}
</style><path class="lgbr8o9iq"/>`,
		"fallback": "uix:blackhead-extractor",
	});
}

export default Component;
