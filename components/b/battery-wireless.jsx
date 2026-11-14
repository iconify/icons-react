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
		"content": `<style>.r4eciws9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H19v9H2.5Zm19 3v3M6.25 5.5a6.5 6.5 0 0 1 9 0m-7 2.5a3.5 3.5 0 0 1 5 0");
}
</style><path class="r4eciws9b"/>`,
		"fallback": "uix-sharp:battery-wireless",
	});
}

export default Component;
