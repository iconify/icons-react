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
		"content": `<style>.ly_d4eb8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h12.5v4H3Zm5 12h7.5v4H8Zm7.5-10h5v12h-5");
}
</style><path class="ly_d4eb8d"/>`,
		"fallback": "uix-sharp:finish-to-finish",
	});
}

export default Component;
