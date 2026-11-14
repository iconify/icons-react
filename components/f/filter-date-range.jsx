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
		"content": `<style>.y62xeyxoy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.732 19.366L8 17.5V11L2.5 3.5h15L12 11v1.499m2.5 2.751h7v6.25h-7Zm2-1.25v2.25m3-2.25v2.25m-5 1.75h7");
}
</style><path class="y62xeyxoy"/>`,
		"fallback": "uix-sharp:filter-date-range",
	});
}

export default Component;
