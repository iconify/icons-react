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
		"content": `<style>.bwss2ccjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21v-7.5h4v-6h3.5v-5H21V21ZM14 7.5h4M14 13h4M6 17.5h5");
}
</style><path class="bwss2ccjs"/>`,
		"fallback": "uix-sharp:brutalist-building",
	});
}

export default Component;
