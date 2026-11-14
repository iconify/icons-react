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
		"content": `<style>.sxb4x9bgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 9.5l8.5-5l8.5 5Zm0 11h17m-14-9v7m4-7v7m3.5-7v7m3.5-7v7");
}
</style><path class="sxb4x9bgm"/>`,
		"fallback": "uix-sharp:greek-temple",
	});
}

export default Component;
