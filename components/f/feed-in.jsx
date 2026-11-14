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
		"content": `<style>.c_mmo16rh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11L5 4h7l-2.5 7Zm12 10.5l3.25-17l3.25 17m-6-13h5.5m-16.75-1h7M4 16.5h8m-2-2l2 2l-2 2");
}
</style><path class="c_mmo16rh"/>`,
		"fallback": "uix-sharp:feed-in",
	});
}

export default Component;
