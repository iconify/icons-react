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
		"content": `<style>.kphya8y1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M2.5 12h19M12 12c2 0 3-2 3.5-5c.5-2 1.5-2.5 3-2.5M17 5h.01");
}
</style><path class="kphya8y1r"/>`,
		"fallback": "uix-sharp:cartesian-plane",
	});
}

export default Component;
