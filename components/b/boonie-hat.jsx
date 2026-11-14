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
		"content": `<style>.lmpqkv2ca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14v-3a5.5 5.5 0 0 1 11 0v3m-15 4.5Q3 14 6.5 14h11q3.5 0 4 4.5M6.5 11h11");
}
</style><path class="lmpqkv2ca"/>`,
		"fallback": "uix:boonie-hat",
	});
}

export default Component;
