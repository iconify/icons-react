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
		"content": `<style>.ft00h-bnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6h5v12h-5Zm-7 6h4.25M4.5 9.75L6.75 12L4.5 14.25Zm17 2.25h-4.25m2.25-2.25L17.25 12l2.25 2.25Z");
}
</style><path class="ft00h-bnk"/>`,
		"fallback": "uix-sharp:force-feedback",
	});
}

export default Component;
