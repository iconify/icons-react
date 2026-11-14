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
		"content": `<style>.r2m1tpflh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11v-1a7.25 7.25 0 0 1 14.5 0v1M2.5 11H7v8H2.5ZM17 11h4.5v8H17Z");
}
</style><path class="r2m1tpflh"/>`,
		"fallback": "uix-sharp:ear-muffs",
	});
}

export default Component;
