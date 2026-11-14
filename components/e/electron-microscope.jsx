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
		"content": `<style>.yx4j-ab9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7v11h-7Zm7 2.5H19v16M4.5 21H19m-8.5-7.5l1.5 4l1.5-4m-7.5 4h10");
}
</style><path class="yx4j-ab9u"/>`,
		"fallback": "uix-sharp:electron-microscope",
	});
}

export default Component;
