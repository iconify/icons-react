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
		"content": `<style>.gu80ylb1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 21.5v-14a4.5 4.5 0 0 0-9 0V10m7.5 11.5h3");
}
</style><path class="gu80ylb1v"/>`,
		"fallback": "uix-sharp:elder-wisdom",
	});
}

export default Component;
