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
		"content": `<style>.cx4fvlemb {
  d: path("M7.5 10.5L12 15l4.5-4.5");
}

.t9n3scb0u {
  d: path("M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3M12 3.5V15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t9n3scb0u"/><path class="cx4fvlemb"/></g>`,
		"fallback": "uix-sharp:download",
	});
}

export default Component;
