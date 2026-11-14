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
		"content": `<style>.vrfee-otq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 19l8.75-8.75m1.5-4.5L21 9.5l-6 6l-3.75-7.25ZM12.5 7L10 4.5");
}
</style><path class="vrfee-otq"/>`,
		"fallback": "uix-sharp:crash-axe",
	});
}

export default Component;
