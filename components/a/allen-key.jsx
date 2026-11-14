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
		"content": `<style>.tsyu5clpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21V7a4 4 0 0 1 4-4h8v3h-7.5A1.5 1.5 0 0 0 9 7.5V21Zm0-3h3");
}
</style><path class="tsyu5clpn"/>`,
		"fallback": "uix-sharp:allen-key",
	});
}

export default Component;
