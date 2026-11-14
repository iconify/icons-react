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
		"content": `<style>.v29ryqy1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 14.5l1.5-6h12l1.5 6Zm1.5-6c0-6 12-6 12 0m-12.75 3L2.75 8M13 17.25c1.75 1.75 1.75 3.5 0 3.5s-1.75-1.75 0-3.5Z");
}
</style><path class="v29ryqy1k"/>`,
		"fallback": "uix-sharp:camp-kettle",
	});
}

export default Component;
