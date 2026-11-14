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
		"content": `<style>.zrc0gabro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5c-3-2-6.5-2.5-9.5-2v-7c3-.5 6.5 0 9.5 2c3-2 6.5-2.5 9.5-2v7c-3-.5-6.5 0-9.5 2m0-7v7m.614-17.77L16 5a1.602 1.602 0 0 1 0 3l-3.386 1.27a1.75 1.75 0 0 1-1.228 0L8 8a1.602 1.602 0 0 1 0-3l3.386-1.27a1.75 1.75 0 0 1 1.228 0M17.5 7.5V10");
}
</style><path class="zrc0gabro"/>`,
		"fallback": "uix:education-law",
	});
}

export default Component;
