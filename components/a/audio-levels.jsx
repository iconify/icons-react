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
		"content": `<style>.aklmlqboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 20.5V13m6 7.5V6m6 14.5V10M4.5 10h3m3-7h3m3 4h3");
}
</style><path class="aklmlqboq"/>`,
		"fallback": "uix-sharp:audio-levels",
	});
}

export default Component;
