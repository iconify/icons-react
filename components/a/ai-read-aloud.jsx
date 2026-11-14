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
		"content": `<style>.g8uo_dubr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h4l5-4.5v15l-5-4.5h-4Zm11.294-.277a4 4 0 0 1 0 6.554m2.295-9.83a8 8 0 0 1 0 13.106");
}
</style><path class="g8uo_dubr"/>`,
		"fallback": "uix-sharp:ai-read-aloud",
	});
}

export default Component;
