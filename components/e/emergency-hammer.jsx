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
		"content": `<style>.rf1qzjbcn {
  d: path("m13.237 8.641l2.122 2.122l-7.425 7.424l-2.121-2.121ZM15.5 15l2.5 2.5l-1.5 1.75l3 2.5M18 17.5l3.75-1");
}

.txved6bgl {
  d: path("m11.293 4.222l3.005.53l4.95 4.95l.53 3.005l-3.005-.53l-4.95-4.95Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="txved6bgl"/><path class="rf1qzjbcn"/></g>`,
		"fallback": "uix-sharp:emergency-hammer",
	});
}

export default Component;
