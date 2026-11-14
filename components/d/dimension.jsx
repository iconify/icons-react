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
		"content": `<style>.zf-djx3xo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15.75H15l3.5 2.75l-3.5 2.75H3.5Zm11.25 2.75h.01m-9.51-4.25l6.75-4l4.5.75l-1.25 3.25m-2-1.25h.01M3 14l3.75-6.75L11 5.5l.5 3.5m-2.25-.25h.01");
}
</style><path class="zf-djx3xo"/>`,
		"fallback": "uix-sharp:dimension",
	});
}

export default Component;
