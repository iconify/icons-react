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
		"content": `<style>.mux3mhb_k {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-15 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-10 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-5 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="mux3mhb_k"/>`,
		"fallback": "uix-sharp:cohort-table",
	});
}

export default Component;
