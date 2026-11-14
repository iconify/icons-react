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
		"content": `<style>.mbfiacbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l12.5-5.5L10 16l-2.25-4.75Zm4.75 2.25L15.5 3.5M18 15v6m-3-3h6");
}
</style><path class="mbfiacbvq"/>`,
		"fallback": "uix-sharp:dm-new",
	});
}

export default Component;
