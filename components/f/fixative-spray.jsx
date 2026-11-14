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
		"content": `<style>.diuhcab9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5H13v12H3.5Zm2.5-5h4.5v5H6ZM14 6h.01m3.49-2h.01M18 8.25h.01M21 6h.01");
}
</style><path class="diuhcab9f"/>`,
		"fallback": "uix-sharp:fixative-spray",
	});
}

export default Component;
