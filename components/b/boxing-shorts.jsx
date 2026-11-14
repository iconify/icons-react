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
		"content": `<style>.prz56b50u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4.5h16v4H4Zm1.5 4L3.5 20h7l1.5-5.5l1.5 5.5h7l-2-11.5");
}
</style><path class="prz56b50u"/>`,
		"fallback": "uix-sharp:boxing-shorts",
	});
}

export default Component;
