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
		"content": `<style>.jgd2ibbgd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v16h-19Zm0 5h19M8.75 9v11m6.5-11v11M7 2.5v3m10-3v3");
}
</style><path class="jgd2ibbgd"/>`,
		"fallback": "uix-sharp:calendar-quarter",
	});
}

export default Component;
