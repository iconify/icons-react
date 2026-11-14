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
		"content": `<style>.sq7blmb2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18v17H3Zm4 0V2.5h3V4m4 0V2.5h3V4M3 9.75h18m-18 5.5h18");
}
</style><path class="sq7blmb2l"/>`,
		"fallback": "uix-sharp:battery-bank",
	});
}

export default Component;
