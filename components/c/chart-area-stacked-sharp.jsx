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
		"content": `<style>.qxf62ybem {
  d: path("M7.25 15.75v-3l.66-.75l2.43-2.75l.66-.75l.76.65l1.73 1.45l.76.65l.71-.71l4.08-4.08l.71-.71v11H7.25z");
}

.vf_31rbpy {
  d: path("M3.75 3.75v16.5h16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vf_31rbpy"/><path class="qxf62ybem"/></g>`,
		"fallback": "iconoven:chart-area-stacked-sharp",
	});
}

export default Component;
