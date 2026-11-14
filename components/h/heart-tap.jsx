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
		"content": `<style>.kkjzfdb0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21c-4-3-7-5.5-7-8.5a3.75 3.75 0 0 1 7-1a3.75 3.75 0 0 1 7 1c0 3-3 5.5-7 8.5Zm5.065-16.048a7.5 7.5 0 0 1 4.483 4.483M17.75 2.907a10.5 10.5 0 0 1 3.843 3.843");
}
</style><path class="kkjzfdb0l"/>`,
		"fallback": "uix-sharp:heart-tap",
	});
}

export default Component;
