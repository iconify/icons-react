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
		"content": `<style>.a7pzvbbwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9c-3.5 2-3.5 9 0 12h10c3.5-3 3.5-10 0-12Zm0 0c0-3.5 2.25-4.5 5-4.5s5 1 5 4.5m-5-6.5v2");
}
</style><path class="a7pzvbbwr"/>`,
		"fallback": "uix-sharp:canopic-jar",
	});
}

export default Component;
