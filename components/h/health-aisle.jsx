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
		"content": `<style>.vvk2_jg0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19M4 11h16M4 19h16M7 11V8a2 2 0 0 1 2-2V4h2v2a2 2 0 0 1 2 2v3m-2 3h6v5h-6Z");
}
</style><path class="vvk2_jg0e"/>`,
		"fallback": "uix-sharp:health-aisle",
	});
}

export default Component;
