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
		"content": `<style>.yjbviacbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 4.5h9m-17 5h17m-17 5h17m-17 5H14M3.5 4.5H8M6.25 2.75L8 4.5L6.25 6.25");
}
</style><path class="yjbviacbu"/>`,
		"fallback": "uix-sharp:indent-first-line",
	});
}

export default Component;
