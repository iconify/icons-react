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
		"content": `<style>.foss7jaag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4V2.75h3l1 1h3.5v4h-7.5V6.5Zm11 6.25V9h3l1 1h3.5v3.25h-7.5V12Zm0 7.5V16.5h3l1 1h3.5v3.25h-7.5V19.5Zm-7.25-7.5V19h4.75M6.5 11.75h4.75");
}
</style><path class="foss7jaag"/>`,
		"fallback": "iconoven:folder-tree-sharp",
	});
}

export default Component;
