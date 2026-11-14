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
		"content": `<style>.wy_leqb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21v-5.5l9-9l3 3V7l2.25-2.25L19.5 7v7l1.5 1.5V21Zm4.5 0v-3.5");
}
</style><path class="wy_leqb1f"/>`,
		"fallback": "uix-sharp:attic-room",
	});
}

export default Component;
