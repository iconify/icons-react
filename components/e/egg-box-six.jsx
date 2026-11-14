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
		"content": `<style>.t6oxvyyij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5h19l-2 7.5h-15Zm1.75 0a1.75 4.5 0 0 1 3.5 0m2.5 0a1.75 4.5 0 0 1 3.5 0m2.5 0a1.75 4.5 0 0 1 3.5 0M6.5 14.25h11");
}
</style><path class="t6oxvyyij"/>`,
		"fallback": "uix-sharp:egg-box-six",
	});
}

export default Component;
