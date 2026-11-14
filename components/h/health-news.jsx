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
		"content": `<style>.x9wcpibwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v17h-19Zm6 4v5M6 10h5m3.5-2h4m-4 4h4M6 16.5h12");
}
</style><path class="x9wcpibwo"/>`,
		"fallback": "uix-sharp:health-news",
	});
}

export default Component;
