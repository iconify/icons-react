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
		"content": `<style>.f8-qqtbli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0ZM3 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm13 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-.75-4l1.75 2m-8.25-2L7 15.5");
}
</style><path class="f8-qqtbli"/>`,
		"fallback": "uix-sharp:amino-group",
	});
}

export default Component;
