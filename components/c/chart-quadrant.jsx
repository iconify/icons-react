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
		"content": `<style>.kymtg4b1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17v17h-17Zm8.5 0v17M3.5 12h17m-13-4.5h.01M17 7h.01m-.51 9.5h.01");
}
</style><path class="kymtg4b1p"/>`,
		"fallback": "uix-sharp:chart-quadrant",
	});
}

export default Component;
