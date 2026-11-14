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
		"content": `<style>.s76xuebgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h19m-15 0L3 20m9-11.5V20m5.5-11.5L21 20M6.5 8.5q0-3.5 3-4q0 3-3 4Zm5.5 0q0-3.5 3-4q0 3-3 4Zm5.5 0q0-3.5 3-4q0 3-3 4Z");
}
</style><path class="s76xuebgu"/>`,
		"fallback": "uix-sharp:crop-field",
	});
}

export default Component;
