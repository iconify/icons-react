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
		"content": `<style>.eh3nrkb_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.5L3 12l3.5 5.5m11-11L21 12l-3.5 5.5M9.5 8h5m-5 4H13m-3.5 4h2");
}
</style><path class="eh3nrkb_x"/>`,
		"fallback": "uix-sharp:bytecode",
	});
}

export default Component;
