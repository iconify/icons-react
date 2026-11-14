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
		"content": `<style>.y44qe_6-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.25H7v4.5H2.5Zm7.25 0h4.5v4.5h-4.5Zm7.25 0h4.5v4.5H17ZM2.5 13.5H7V18H2.5Zm7.25 0h4.5V18h-4.5Zm7.25 0h4.5V18H17Z");
}
</style><path class="y44qe_6-j"/>`,
		"fallback": "uix-sharp:colour-checker",
	});
}

export default Component;
