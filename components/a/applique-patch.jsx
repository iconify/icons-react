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
		"content": `<style>.ytxvlpg7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm4.5 3h2M11 6h2m1.5 0h2M6 7.5v2M6 11v2m0 1.5v2M7.5 18h2m1.5 0h2m1.5 0h2M18 7.5v2m0 1.5v2m0 1.5v2");
}
</style><path class="ytxvlpg7j"/>`,
		"fallback": "uix-sharp:applique-patch",
	});
}

export default Component;
