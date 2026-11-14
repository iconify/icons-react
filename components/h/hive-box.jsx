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
		"content": `<style>.gtwthmr2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17V7h-17ZM5 7h14v6H5Zm0 6h14v7H5Zm1.5 7v1.5m11-1.5v1.5m-7.5-4h4");
}
</style><path class="gtwthmr2d"/>`,
		"fallback": "uix-sharp:hive-box",
	});
}

export default Component;
