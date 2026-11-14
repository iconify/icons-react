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
		"content": `<style>.aaorrgb1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11v13h-11Zm2.5 13l-2.5 6m8.5-6l2.5 6M3.5 5q-1.5 4 0 8m17-8q1.5 4 0 8");
}
</style><path class="aaorrgb1j"/>`,
		"fallback": "uix-sharp:diffusion-scrim",
	});
}

export default Component;
