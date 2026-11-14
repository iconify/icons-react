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
		"content": `<style>.c2a3fh_2u {
  d: path("M3.5 7q1-2.5 3.5-2.5h13.5m-11 0L7.5 20");
}

.jnl5_bc4s {
  d: path("M15.5 4.5V17a3 3 0 0 0 3 3h1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c2a3fh_2u"/><path class="jnl5_bc4s"/></g>`,
		"fallback": "uix-sharp:constant-pi",
	});
}

export default Component;
