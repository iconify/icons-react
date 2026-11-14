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
		"content": `<style>.ko1jmub-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.25h3.5v3.5h-3.5ZM6.75 5c4.809 0 9.094 2.798 10.66 7.225M18 15v6m-3-3h6");
}
</style><path class="ko1jmub-p"/>`,
		"fallback": "uix-sharp:anchor-point-add",
	});
}

export default Component;
