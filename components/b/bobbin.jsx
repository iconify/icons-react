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
		"content": `<style>.kizc5abrl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h13v3h-13Zm0 16h13v3h-13Zm3-13v13m7-13v13m-7-6.5h7m-7 3h7m-7-6h7c4.5 0 3 5 6 6.5");
}
</style><path class="kizc5abrl"/>`,
		"fallback": "uix-sharp:bobbin",
	});
}

export default Component;
