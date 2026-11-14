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
		"content": `<style>.gd942nwpo {
  d: path("M12 10.5c.5 2 3 2.5 3 5.25a3 3 0 0 1-6 0c0-1.5 1-2.5 1.5-3c.25 1 .75 1.5 1.25 1.5c0-1-.25-2.75.25-3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbop_o7qc {
  d: path("M6 7.5a6 5 0 0 1 12 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2ZM2.5 12H6m12 4.5h3.5");
}
</style><g class="hntgybcog"><path class="wbop_o7qc"/><path class="gd942nwpo"/></g>`,
		"fallback": "uix:hot-water-tank-large",
	});
}

export default Component;
