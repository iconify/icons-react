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
		"content": `<style>.vng0i09qa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5h15V12h-15ZM7 12v7.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V12M9 5.75h6m3-.5q-1.25-1.5 0-2.75");
}
</style><path class="vng0i09qa"/>`,
		"fallback": "uix-sharp:cigarette-bin",
	});
}

export default Component;
