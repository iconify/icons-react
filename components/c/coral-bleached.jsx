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
		"content": `<style>.zht82db6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 16.5v-13m0 12L6.5 10V5.5M12 12l5-5V4M2.5 20q2.375-2 4.75 0T12 20t4.75 0t4.75 0");
}
</style><path class="zht82db6j"/>`,
		"fallback": "uix-sharp:coral-bleached",
	});
}

export default Component;
