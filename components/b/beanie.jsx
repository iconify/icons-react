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
		"content": `<style>.flxu6_p_h {
  d: path("M10.25 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM8 15v5m4-5v5m4-5v5");
}

.gpuqpdktg {
  d: path("M5.5 15v-2a6.5 6.5 0 0 1 13 0v2M4 15h16v5H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gpuqpdktg"/><path class="flxu6_p_h"/></g>`,
		"fallback": "uix-sharp:beanie",
	});
}

export default Component;
