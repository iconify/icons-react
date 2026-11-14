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
		"content": `<style>.icl5t5bmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5V5A2.5 2.5 0 0 1 5 2.5h2.5m9 0H19A2.5 2.5 0 0 1 21.5 5v2.5m0 9V19a2.5 2.5 0 0 1-2.5 2.5h-2.5m-9 0H5A2.5 2.5 0 0 1 2.5 19v-2.5M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2.5 9.5c0-2.75 2.5-3.75 5.5-3.75s5.5 1 5.5 3.75");
}
</style><path class="icl5t5bmc"/>`,
		"fallback": "uix-sharp:character-select",
	});
}

export default Component;
