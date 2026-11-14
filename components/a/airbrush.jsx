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
		"content": `<style>.phxkcwb-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8H13l5 2l-5 2H4.5a2 2 0 0 1 0-4Zm4 4q.5 3-1 5.5M20.5 7h.01m.49 3h.01m-.51 3h.01");
}
</style><path class="phxkcwb-t"/>`,
		"fallback": "uix-sharp:airbrush",
	});
}

export default Component;
