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
		"content": `<style>.bbnq26p-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h19v13h-19Zm0 5l5-5m-5 9l9-9m2 4h5m-6.5 5h6.5");
}
</style><path class="bbnq26p-y"/>`,
		"fallback": "uix-sharp:cheque-crossed",
	});
}

export default Component;
