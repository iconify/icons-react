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
		"content": `<style>.vaff8pbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8h14v7a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4Zm1.5 0a5.5 4 0 0 1 11 0M13 4V2.5M10 19l-1 2.5m4-2.5v2.5m3-2.5l1 2.5M6 15H3.5v2");
}
</style><path class="vaff8pbgt"/>`,
		"fallback": "uix-sharp:brew-kettle",
	});
}

export default Component;
