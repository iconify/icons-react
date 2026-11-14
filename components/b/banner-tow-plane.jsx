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
		"content": `<style>.hdw-qd17i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.1 11H2.5V2.5h17V11h-1.7M6 6.75h10M11 11l1.464 2.733M14.75 18h6.75M19 18l-2.25-3.5M19 18l-2.25 3.5m-2-5v3");
}
</style><path class="hdw-qd17i"/>`,
		"fallback": "uix-sharp:banner-tow-plane",
	});
}

export default Component;
