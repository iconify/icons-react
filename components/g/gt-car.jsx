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
		"content": `<style>.rcmfte2wa {
  d: path("M4.5 14.5h-2v-2.75l6-2.25l3-2.75h4L19 9.5l2.5.5v4.5h-2m-5 0h-5");
}

.u_h3bbmnv {
  d: path("M4.5 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm10 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-12-7H5m-.5 0V11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rcmfte2wa"/><path class="u_h3bbmnv"/></g>`,
		"fallback": "uix-sharp:gt-car",
	});
}

export default Component;
