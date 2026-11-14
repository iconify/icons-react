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
		"content": `<style>.qhyeqbcmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h3v15h-3Zm16 0h3v15h-3ZM5.5 7l2.25 2.5L10 7l2 2.5L14 7l2.25 2.5L18.5 7m-13 10l2.25-2.5L10 17l2-2.5l2 2.5l2.25-2.5L18.5 17");
}
</style><path class="qhyeqbcmq"/>`,
		"fallback": "uix-sharp:bellows",
	});
}

export default Component;
