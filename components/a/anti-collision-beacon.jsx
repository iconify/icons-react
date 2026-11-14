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
		"content": `<style>.v6bp5ohwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 16v-4a4 4 0 0 1 8 0v4Zm-2.5 0h13v3.5h-13ZM12 2.5v2m-7 1L6.5 7M19 5.5L17.5 7m-15 5h2m15 0h2");
}
</style><path class="v6bp5ohwo"/>`,
		"fallback": "uix-sharp:anti-collision-beacon",
	});
}

export default Component;
