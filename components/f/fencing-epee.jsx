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
		"content": `<style>.bt4ogmmeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13.25a4.6 4.6 0 0 1 6.5 6.5Zm6.5 0L21 3M7.5 16.5L3 21");
}
</style><path class="bt4ogmmeq"/>`,
		"fallback": "uix-sharp:fencing-epee",
	});
}

export default Component;
