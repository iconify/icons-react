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
		"content": `<style>.d925dqbjv {
  d: path("M3 4.5h18V21H3Zm5-2v4m8-4v4");
}

.lj-rjhqfd {
  d: path("m12 18l-4.25-4.25A3 3 0 0 1 12 10a3 3 0 0 1 4.25 3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d925dqbjv"/><path class="lj-rjhqfd"/></g>`,
		"fallback": "uix-sharp:anniversary-calendar",
	});
}

export default Component;
