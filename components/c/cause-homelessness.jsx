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
		"content": `<style>.zfa8jmblz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.544 20.5H3.5v-10L12 3.25l8.5 7.25v1.056m-5 3.944l5 5m0-5l-5 5");
}
</style><path class="zfa8jmblz"/>`,
		"fallback": "uix-sharp:cause-homelessness",
	});
}

export default Component;
