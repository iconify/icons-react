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
		"content": `<style>.gnldlabfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11c.5-2 3.5-2.25 6-1l1 1H12c0-5 5-5 5 0h4.5m-7-1h.01M4.5 15C7 13.75 9 16.25 12 15s5 1.25 7.5 0");
}
</style><path class="gnldlabfx"/>`,
		"fallback": "uix-sharp:caiman",
	});
}

export default Component;
