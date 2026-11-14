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
		"content": `<style>.e6_dw5bau {
  d: path("M3.5 9a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM8 13.5v7m-2.5-3h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wo6d2wb9a {
  d: path("M10.5 11a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm7.75-3.25l3-3m-3.25 0h3.25V8");
}
</style><g class="ulnmmdpxh"><path class="e6_dw5bau"/><path class="wo6d2wb9a"/></g>`,
		"fallback": "uix-sharp:breeding",
	});
}

export default Component;
