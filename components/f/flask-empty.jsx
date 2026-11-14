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
		"content": `<style>.f53rllbdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3v6.5l-5 9.75A1.5 1.5 0 0 0 5.75 21h12.5a1.5 1.5 0 0 0 1.25-1.75l-5-9.75V3M8 3h8");
}
</style><path class="f53rllbdx"/>`,
		"fallback": "uix-sharp:flask-empty",
	});
}

export default Component;
