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
		"content": `<style>.l9hsu_g3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h12v9h-12Zm1.5 14h8m-2.25-2.25L12 17.5l-2.25 2.25m5.75-4.5h6v4.5h-6Z");
}
</style><path class="l9hsu_g3m"/>`,
		"fallback": "uix-sharp:codec",
	});
}

export default Component;
