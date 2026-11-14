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
		"content": `<style>.t2ul84pdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14V16H5ZM8.5 16h7v5.5h-7Zm0 2.75h7");
}
</style><path class="t2ul84pdq"/>`,
		"fallback": "uix-sharp:goalie-blocker",
	});
}

export default Component;
