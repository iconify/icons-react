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
		"content": `<style>.v09m3mb2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8h14l-.5 4.25h-4.25a2 2 0 0 0-2 2V21h-4.5a2 2 0 0 1-2-2Zm3.5 0V6.5a3.5 3.5 0 0 1 7 0V8m2.5 7v6m-3-3h6");
}
</style><path class="v09m3mb2s"/>`,
		"fallback": "uix-sharp:bag-add",
	});
}

export default Component;
