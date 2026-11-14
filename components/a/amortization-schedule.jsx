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
		"content": `<style>.gycbqzb5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm0 4.5h18m-13 0V21m3-10.5h7m-7 2.75h5M11 16h3m-3 2.75h1");
}
</style><path class="gycbqzb5s"/>`,
		"fallback": "uix-sharp:amortization-schedule",
	});
}

export default Component;
