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
		"content": `<style>.wfw0ozbuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4.75h9V21.5h-9Zm3 0V2.5h3v2.25m-6 7.75h9");
}
</style><path class="wfw0ozbuf"/>`,
		"fallback": "uix-sharp:battery-aaa",
	});
}

export default Component;
