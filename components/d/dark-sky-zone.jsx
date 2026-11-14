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
		"content": `<style>.tw4hecc5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 16A7.25 7.25 0 1 1 8.25 5A6 6 0 0 0 16 16Zm2-13.5q.5 3 3.5 3.5q-3 .5-3.5 3.5q-.5-3-3.5-3.5q3-.5 3.5-3.5ZM20.5 13h.01");
}
</style><path class="tw4hecc5q"/>`,
		"fallback": "uix-sharp:dark-sky-zone",
	});
}

export default Component;
