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
		"content": `<style>.rlgwv4otw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13v19h-13Zm6.5 0v19M5.5 7.25h13M5.5 12h13m-13 4.75h13");
}
</style><path class="rlgwv4otw"/>`,
		"fallback": "uix-sharp:curtain-wall",
	});
}

export default Component;
