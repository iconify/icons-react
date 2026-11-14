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
		"content": `<style>.i-zcl-b-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4v16.5M20 4v16.5M4 7h16M4 16h16M8 7v9m4-9v9m4-9v9");
}
</style><path class="i-zcl-b-p"/>`,
		"fallback": "uix-sharp:crib-cot",
	});
}

export default Component;
