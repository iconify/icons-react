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
		"content": `<style>.zai_kjbhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5H14v11H2.5Zm11.5 4h4l3.5 3.5v3.5H14m-9 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-9.5-6L10.5 8m-4.25.25h.01m3.99 4h.01");
}
</style><path class="zai_kjbhg"/>`,
		"fallback": "uix-sharp:free-shipping",
	});
}

export default Component;
