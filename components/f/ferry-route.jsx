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
		"content": `<style>.h1je0pwzj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10.5h17l-2 4.5h-13Zm3.5-6h8v6H7Zm-4.5 15H6m3 0h4m3 0h5.5");
}
</style><path class="h1je0pwzj"/>`,
		"fallback": "uix-sharp:ferry-route",
	});
}

export default Component;
