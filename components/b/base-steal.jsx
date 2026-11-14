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
		"content": `<style>.k6jmf5bkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16 6.5l5.5 5.5l-5.5 5.5l-5.5-5.5ZM2.5 12h5.25M5 9.25L7.75 12L5 14.75");
}
</style><path class="k6jmf5bkz"/>`,
		"fallback": "uix-sharp:base-steal",
	});
}

export default Component;
