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
		"content": `<style>.ac_0aabuh {
  d: path("m9.66 13.87l1.93-2.99l.41-.63l.41.63l1.93 2.99l.41.63h-5.5z");
}

.m9vadkbmx {
  d: path("M6.75 2.75v14.5h14.5");
}

.pnf7szbuz {
  d: path("M2.75 6.75h14.5v14.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m9vadkbmx"/><path class="pnf7szbuz"/><path class="ac_0aabuh"/></g>`,
		"fallback": "iconoven:crop-photo-sharp",
	});
}

export default Component;
