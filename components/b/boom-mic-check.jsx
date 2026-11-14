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
		"content": `<style>.pv409sb9w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.25L10.75 9M13 4a2 2 0 0 1 3 0a2 2 0 0 1 3 0a3 3 0 0 1 0 6a2 2 0 0 1-3 0a2 2 0 0 1-3 0a3 3 0 0 1 0-6Zm1.75 14l2 2L21 15.75");
}
</style><path class="pv409sb9w"/>`,
		"fallback": "uix-sharp:boom-mic-check",
	});
}

export default Component;
