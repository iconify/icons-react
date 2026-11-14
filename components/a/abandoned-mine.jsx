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
		"content": `<style>.uerf6usix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 3.5l-2.5 18M17 3.5l2.5 18m-16-18h17m-18 18h19m-17-12l15 3M4 17.5L20 15");
}
</style><path class="uerf6usix"/>`,
		"fallback": "uix-sharp:abandoned-mine",
	});
}

export default Component;
