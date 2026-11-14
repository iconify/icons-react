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
		"content": `<style>.q-zrdcc1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15h16v5.5H4ZM6.5 4v11M10 4v11m4-11v11m3.5-11v11");
}
</style><path class="q-zrdcc1t"/>`,
		"fallback": "uix-sharp:heatsink",
	});
}

export default Component;
