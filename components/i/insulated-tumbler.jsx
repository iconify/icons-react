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
		"content": `<style>.grfmzr7js {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.5h13v3h-13Zm1 3h11v14h-11Zm7.5-3L16.5 2m-7 8.5v8");
}
</style><path class="grfmzr7js"/>`,
		"fallback": "uix-sharp:insulated-tumbler",
	});
}

export default Component;
