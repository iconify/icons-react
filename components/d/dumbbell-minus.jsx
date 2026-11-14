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
		"content": `<style>.gvwxwhmqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5H8v12H4.5ZM16 15.2V4.5h3.5v10.7m-17-4.7h2m3.5 0h8m3.5 0h2M15 18h6");
}
</style><path class="gvwxwhmqp"/>`,
		"fallback": "uix-sharp:dumbbell-minus",
	});
}

export default Component;
