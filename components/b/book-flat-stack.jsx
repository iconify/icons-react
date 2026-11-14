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
		"content": `<style>.c-n4kab9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5h18v6H3Zm2-6h15v6H5Zm-1-6h14v6H4Zm2.5 12v6m10-12v6m-9-12v6");
}
</style><path class="c-n4kab9m"/>`,
		"fallback": "uix-sharp:book-flat-stack",
	});
}

export default Component;
