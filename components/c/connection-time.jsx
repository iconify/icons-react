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
		"content": `<style>.jnzoy_7aw {
  d: path("M3 3.5c4 0 4 7 8 7m-8 7c4 0 4-7 8-7m0 0h10m-10 0h.01m4.49 4.25h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}

.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jnzoy_7aw"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix-sharp:connection-time",
	});
}

export default Component;
