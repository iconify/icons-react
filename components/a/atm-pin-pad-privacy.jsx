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
		"content": `<style>.hzuoybbgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8L5 3h14l2.5 5ZM6 10.75h12V22H6Zm3 3h.01m2.99 0h.01m2.99 0h.01M9 16.5h.01m2.99 0h.01m2.99 0h.01M9 19.25h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="hzuoybbgw"/>`,
		"fallback": "uix-sharp:atm-pin-pad-privacy",
	});
}

export default Component;
