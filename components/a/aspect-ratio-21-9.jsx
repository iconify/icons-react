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
		"content": `<style>.j-i44ebps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 7.75h13.75a2.625 2.625 0 0 1 2.625 2.625v3.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 13.625v-3.25A2.625 2.625 0 0 1 5.125 7.75M5.5 10.5v3m13-3v3");
}
</style><path class="j-i44ebps"/>`,
		"fallback": "uix:aspect-ratio-21-9",
	});
}

export default Component;
