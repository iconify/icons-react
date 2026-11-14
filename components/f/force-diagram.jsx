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
		"content": `<style>.np_qau8df {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8.5h7v7h-7Zm3.5 0V3m-2 2l2-2l2 2m1.5 7H21m-2-2l2 2l-2 2m-7 1.5V21m-2-2l2 2l2-2m-5.5-7H3m2-2l-2 2l2 2");
}
</style><path class="np_qau8df"/>`,
		"fallback": "uix-sharp:force-diagram",
	});
}

export default Component;
