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
		"content": `<style>.fdnof8b6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6h8v8h-8Zm8 2.5l5-2v7l-5-2ZM11 14v4.5h3.5V14m-12-6h3.25M2.5 12h3.25");
}
</style><path class="fdnof8b6l"/>`,
		"fallback": "uix-sharp:handheld-shot",
	});
}

export default Component;
