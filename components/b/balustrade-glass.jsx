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
		"content": `<style>.otpwngh_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21v-2.5h6v-3h6v-3h6V21ZM5 9l14-6.5v5L5 14Zm0 5v4.5m14-11v5");
}
</style><path class="otpwngh_d"/>`,
		"fallback": "uix-sharp:balustrade-glass",
	});
}

export default Component;
