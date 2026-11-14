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
		"content": `<style>.el-8-ab0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7h10v10H7Zm-4.5 5H7M4.75 9.75L7 12l-2.25 2.25M17 12h4.5m-2.25-2.25L21.5 12l-2.25 2.25M10 4v3m4-3v3m-4 10v3m4-3v3");
}
</style><path class="el-8-ab0e"/>`,
		"fallback": "uix-sharp:inference",
	});
}

export default Component;
