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
		"content": `<style>.i8q5yvv1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12c2-7 5.5-7 7.5 0s5.5 7 7.5 0m0 0h4");
}
</style><path class="i8q5yvv1w"/>`,
		"fallback": "uix-sharp:ac-current",
	});
}

export default Component;
