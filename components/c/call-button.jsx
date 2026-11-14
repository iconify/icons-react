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
		"content": `<style>.i9futybsd {
  d: path("M8 11a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm2 7h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_nty93df {
  d: path("M6 2.5h12a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="v_nty93df"/><path class="i9futybsd"/></g>`,
		"fallback": "uix-sharp:call-button",
	});
}

export default Component;
