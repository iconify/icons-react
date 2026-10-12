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
		"content": `<style>.esr4f1o1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16.75a7.5 7.5 0 0 1 15 0Zm-1.75 0h18.5m-11-5v5m3.5-5v5");
}
</style><path class="esr4f1o1b"/>`,
		"fallback": "iconoven:hard-hat-check-sharp",
	});
}

export default Component;
