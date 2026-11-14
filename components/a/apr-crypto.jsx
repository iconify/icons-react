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
		"content": `<style>.u1_scub4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5h11.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-5.5-7Zm2.5 10.5l6-7m-5.75.5h.01m5.49 6h.01");
}
</style><path class="u1_scub4i"/>`,
		"fallback": "uix-sharp:apr-crypto",
	});
}

export default Component;
