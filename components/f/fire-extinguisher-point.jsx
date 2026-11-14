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
		"content": `<style>.lfizdob-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 9h8v12H8Zm2 0V6h5l2-2M6 11h2m9-3.5V10");
}
</style><path class="lfizdob-u"/>`,
		"fallback": "uix-sharp:fire-extinguisher-point",
	});
}

export default Component;
