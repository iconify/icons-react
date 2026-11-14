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
		"content": `<style>.iay_pst3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h-2v19h2m15-19h2v19h-2M5.25 5.25h5.25v5.25H5.25Zm8.25 0h5.25v5.25H13.5ZM5.25 13.5h5.25v5.25H5.25Zm8.25 0h5.25v5.25H13.5Z");
}
</style><path class="iay_pst3l"/>`,
		"fallback": "uix-sharp:array-2d",
	});
}

export default Component;
