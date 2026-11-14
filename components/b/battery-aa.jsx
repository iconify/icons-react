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
		"content": `<style>.wsq_d-7mt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4.5h8v17H8Zm2.5-2h3v2h-3ZM8 8.5h8");
}
</style><path class="wsq_d-7mt"/>`,
		"fallback": "uix-sharp:battery-aa",
	});
}

export default Component;
