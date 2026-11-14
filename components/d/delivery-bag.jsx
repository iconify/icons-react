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
		"content": `<style>.oecnu3xkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8h17v12.5h-17ZM8 8V6a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 6v2M3.5 12.5h17");
}
</style><path class="oecnu3xkp"/>`,
		"fallback": "uix-sharp:delivery-bag",
	});
}

export default Component;
