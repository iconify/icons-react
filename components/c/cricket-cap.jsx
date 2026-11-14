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
		"content": `<style>.q38ejrbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17c0-6.5 3.5-10.75 8-10.75s6.5 4.25 6.5 8.75l4 2zm9.5-4.5h.01");
}
</style><path class="q38ejrbil"/>`,
		"fallback": "uix-sharp:cricket-cap",
	});
}

export default Component;
