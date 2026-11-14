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
		"content": `<style>.ziskhy4-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 15l5.5 5.5L17 12m1-10q0 3.5 3.5 3.5Q18 5.5 18 9q0-3.5-3.5-3.5Q18 5.5 18 2Z");
}
</style><path class="ziskhy4-a"/>`,
		"fallback": "uix-sharp:ai-check",
	});
}

export default Component;
