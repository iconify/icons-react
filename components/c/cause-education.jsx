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
		"content": `<style>.tf8c7tbco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13.5c-2-1.5-5.5-2-9.5-1.5v7c4-.5 7.5 0 9.5 1.5Zm0 0c2-1.5 5.5-2 9.5-1.5v7c-4-.5-7.5 0-9.5 1.5Zm-8-8l8-3l8 3l-8 3Zm16 0V9");
}
</style><path class="tf8c7tbco"/>`,
		"fallback": "uix-sharp:cause-education",
	});
}

export default Component;
