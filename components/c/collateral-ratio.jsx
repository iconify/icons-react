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
		"content": `<style>.sao3-lbgz {
  d: path("M3.5 6h17M12 3.5v17m-3.5 0h7M5 6v3.5m-3 4h6a3 2.5 0 0 1-6 0ZM19 6v7.5m-3 0h6a3 2.5 0 0 1-6 0Z");
}

.snmk61b_t {
  d: path("M3 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sao3-lbgz"/><path class="snmk61b_t"/></g>`,
		"fallback": "uix-sharp:collateral-ratio",
	});
}

export default Component;
