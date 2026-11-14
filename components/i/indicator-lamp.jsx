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
		"content": `<style>.yyjrwztqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5h14v7H5Zm2.5 0V10a4.5 4.5 0 0 1 9 0v3.5m-13-9l2 2m15-2l-2 2");
}
</style><path class="yyjrwztqt"/>`,
		"fallback": "uix-sharp:indicator-lamp",
	});
}

export default Component;
