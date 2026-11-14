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
		"content": `<style>.yzdbxxurz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5h14v8H5Zm-1.5-2.75h17M12 2.5v8.25m-3-3l3 3l3-3");
}
</style><path class="yzdbxxurz"/>`,
		"fallback": "uix-sharp:force-push",
	});
}

export default Component;
