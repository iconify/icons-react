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
		"content": `<style>.zu9w0l01r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5v-3h6v-3h6v-3h7v9ZM16.677 3.788l4.596 4.596l-3.889 3.889l-4.596-4.596V3.788ZM15.97 6.97h.01");
}
</style><path class="zu9w0l01r"/>`,
		"fallback": "uix-sharp:discount-tiered",
	});
}

export default Component;
