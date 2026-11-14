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
		"content": `<style>.ydhxf-bzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5C13 2.5 18 4 18 9v8c0 2.5-2 4.5-4.5 4.5H10c-2.5 0-4-2-4-4.5V4.5c0-1.1.9-2 2-2ZM10.5 6v12M14 7v11M2.5 8H6m-3.5 7H6");
}
</style><path class="ydhxf-bzx"/>`,
		"fallback": "uix-sharp:cricket-thigh-pad",
	});
}

export default Component;
