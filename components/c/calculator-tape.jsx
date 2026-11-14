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
		"content": `<style>.n2m9ti06y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 6v11l1.75 1.5L10.5 20l1.75 1.5L14 20l1.75 1.5L17 20.25V9m-7.25 4h4.5m-4.5 3.5h2.75");
}
</style><path class="n2m9ti06y"/>`,
		"fallback": "uix-sharp:calculator-tape",
	});
}

export default Component;
