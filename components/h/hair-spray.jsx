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
		"content": `<style>.ziot22gxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8.5h9v13H4Zm1.75-4h5.5v4h-5.5Zm9.75 2h5m-5-3l4-1.5m-4 7.5l4 1.5");
}
</style><path class="ziot22gxu"/>`,
		"fallback": "uix-sharp:hair-spray",
	});
}

export default Component;
