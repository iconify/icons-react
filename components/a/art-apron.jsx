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
		"content": `<style>.r2v35w6kz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4.5h7V8l3.5 2l-1 11H6L5 10l3.5-2Zm0 0c0-1.25 1.5-2 3.5-2s3.5.75 3.5 2M5 10l-2.5 2.5M19 10l2.5 2.5M9 15h6");
}
</style><path class="r2v35w6kz"/>`,
		"fallback": "uix-sharp:art-apron",
	});
}

export default Component;
