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
		"content": `<style>.aa4nlebnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 17v-6.5L7 7v3.5L10.5 7v10m3 0v-6.5L17 7v3.5L20.5 7v10m-18 0h19");
}
</style><path class="aa4nlebnn"/>`,
		"fallback": "uix:industrial-estate",
	});
}

export default Component;
