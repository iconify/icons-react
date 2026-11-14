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
		"content": `<style>.rs_t0gbby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13V4.5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2V13m-11 0h13v3h-13Zm2 3v5.5m9-5.5v1.1m0 3.8v.6M19 16q1 2 3 3q-2 1-3 3q-1-2-3-3q2-1 3-3Z");
}
</style><path class="rs_t0gbby"/>`,
		"fallback": "uix-sharp:furniture-polish",
	});
}

export default Component;
