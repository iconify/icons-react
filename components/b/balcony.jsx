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
		"content": `<style>.k_l_6ybun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13V4a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 17 4v9M2.5 13h19m-19 8.5h19M14.75 9h.01M7 13v8.5m5-8.5v8.5m5-8.5v8.5");
}
</style><path class="k_l_6ybun"/>`,
		"fallback": "uix-sharp:balcony",
	});
}

export default Component;
