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
		"content": `<style>.nr2_msbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19M5.213 3h.574a1.5 1.5 0 0 1 1.487 1.698L6.5 10.5a1.009 1.009 0 0 1-2 0l-.774-5.802A1.5 1.5 0 0 1 5.213 3m6.463 0h.648a1.5 1.5 0 0 1 1.491 1.666L13 12a1.006 1.006 0 0 1-2 0l-.815-7.334A1.5 1.5 0 0 1 11.676 3m6.572 0h.504a1.5 1.5 0 0 1 1.482 1.728L19.5 9.5a1.012 1.012 0 0 1-2 0l-.734-4.772A1.5 1.5 0 0 1 18.248 3");
}
</style><path class="nr2_msbil"/>`,
		"fallback": "uix:frozen-waterfall",
	});
}

export default Component;
