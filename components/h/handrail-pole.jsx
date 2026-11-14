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
		"content": `<style>.wgzi4oi5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 19.5V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3M7 19.5h6v2H7Z");
}
</style><path class="wgzi4oi5h"/>`,
		"fallback": "uix-sharp:handrail-pole",
	});
}

export default Component;
