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
		"content": `<style>.t0w_w5rdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h11.5v4H3Zm0 6.75h11.5v4H3ZM3 17h11.5v4H3Zm16.75-7V3m-2 2l2-2l2 2");
}
</style><path class="t0w_w5rdy"/>`,
		"fallback": "uix-sharp:feed-latest",
	});
}

export default Component;
