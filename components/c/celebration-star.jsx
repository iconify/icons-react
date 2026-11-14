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
		"content": `<style>.kgbry6bft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.5 4l1.91 4.371l4.747.466l-3.566 3.167l1.023 4.659L13.5 14.25l-4.114 2.413l1.023-4.659l-3.566-3.167l4.747-.466ZM3 21l3.5-3.5m-3.5-2L5.5 13");
}
</style><path class="kgbry6bft"/>`,
		"fallback": "uix-sharp:celebration-star",
	});
}

export default Component;
