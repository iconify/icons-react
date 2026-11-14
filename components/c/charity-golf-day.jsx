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
		"content": `<style>.n_mmt8bog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3v16m0-16l7.5 3l-7.5 3Zm-5 16a5 1.75 0 1 0 10 0a5 1.75 0 1 0-10 0Zm12-1.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><path class="n_mmt8bog"/>`,
		"fallback": "uix-sharp:charity-golf-day",
	});
}

export default Component;
