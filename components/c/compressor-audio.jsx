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
		"content": `<style>.zm06ebbul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8.5h8v7H8Zm4-6v3.25m-2.5-2.5l2.5 2.5l2.5-2.5M12 21.5v-3.25m-2.5 2.5l2.5-2.5l2.5 2.5");
}
</style><path class="zm06ebbul"/>`,
		"fallback": "uix-sharp:compressor-audio",
	});
}

export default Component;
