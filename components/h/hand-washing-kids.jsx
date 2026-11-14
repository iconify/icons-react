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
		"content": `<style>.zewql1b6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H12a3.5 3.5 0 0 1 3.5 3.5V9m-8-6.75V5M5 2.25h5m5.5 9.5v3M10 17.5h11v4H10Z");
}
</style><path class="zewql1b6m"/>`,
		"fallback": "uix-sharp:hand-washing-kids",
	});
}

export default Component;
