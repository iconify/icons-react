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
		"content": `<style>.l548te9ys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 6V4.5a1.75 1.75 0 0 1 3.5 0V6M5 6h14v13q-1.75 2.5-3.5 0T12 19t-3.5 0T5 19Zm0 4h14");
}
</style><path class="l548te9ys"/>`,
		"fallback": "uix-sharp:dish-towel",
	});
}

export default Component;
