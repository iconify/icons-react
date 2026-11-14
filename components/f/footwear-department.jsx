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
		"content": `<style>.t-2hux1ej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15V6H7c1 2.5 3 3.5 6 4l6 1c1.5.25 2.5 1.5 2.5 3v1Zm0 3.5h19");
}
</style><path class="t-2hux1ej"/>`,
		"fallback": "uix-sharp:footwear-department",
	});
}

export default Component;
