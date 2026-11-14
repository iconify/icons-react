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
		"content": `<style>.tw6sj7b-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5c1.5-4.5 8.5-5.5 8-12c2.5 3.5 2 8.5 3.5 12M6 2.5l3 4.25H8L9.5 11h-7L4 6.75H3ZM6 11v3.5m12-12l3 4.25h-1L21.5 11h-7L16 6.75h-1Zm0 8.5v3.5");
}
</style><path class="tw6sj7b-q"/>`,
		"fallback": "uix-sharp:forest-path",
	});
}

export default Component;
