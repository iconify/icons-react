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
		"content": `<style>.ilrqacb-x {
  d: path("M12 2.5L16.5 5v5L12 12.5L7.5 10V5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vx74dnv0j {
  d: path("M7.5 5L12 7.5L16.5 5M12 7.5v5m0 2.75V18m-2-2l2 2l2-2M3 20.75h18");
}
</style><g class="ulnmmdpxh"><path class="ilrqacb-x"/><path class="vx74dnv0j"/></g>`,
		"fallback": "uix-sharp:drop-to-floor",
	});
}

export default Component;
