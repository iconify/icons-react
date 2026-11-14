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
		"content": `<style>.so5a-ufie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6H10v13.5H4.5ZM14 6h5.5v8.5H14ZM2.5 3h19");
}
</style><path class="so5a-ufie"/>`,
		"fallback": "uix-sharp:align-top",
	});
}

export default Component;
