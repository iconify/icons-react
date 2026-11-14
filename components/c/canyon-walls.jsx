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
		"content": `<style>.tpu1eubzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5v-17h3L7 9h1.25L10 20.5m11.5 0V6h-2.75l-1.5 5H16l-2 9.5m-11.5 0h19");
}
</style><path class="tpu1eubzz"/>`,
		"fallback": "uix:canyon-walls",
	});
}

export default Component;
