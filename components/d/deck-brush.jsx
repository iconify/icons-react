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
		"content": `<style>.a_ry64jbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12.5h12.5V17H9Zm6.25 0L3.5 3.5M11.25 17v3.5m4-3.5v3.5m4-3.5v3.5");
}
</style><path class="a_ry64jbl"/>`,
		"fallback": "uix-sharp:deck-brush",
	});
}

export default Component;
