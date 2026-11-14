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
		"content": `<style>.s5ymukk-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5H12v13H4.5Zm1.5 0V5h4.5L12 6.5v2M14.75 4L19 2.5m-4 4.25h5M14.75 9.5L19 11");
}
</style><path class="s5ymukk-o"/>`,
		"fallback": "uix-sharp:bear-spray",
	});
}

export default Component;
