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
		"content": `<style>.ejb1tbb1q {
  d: path("M3 6a5 2.25 0 1 0 10 0A5 2.25 0 1 0 3 6Z");
}

.hge82rbvr {
  d: path("M3 6v12a5 2.25 0 0 0 10 0V6m7.5-.5L13 12l7.5 6.5M13 12h7.5m0-6.5h.01M20.5 12h.01m-.01 6.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ejb1tbb1q"/><path class="hge82rbvr"/></g>`,
		"fallback": "uix-sharp:connection-pool",
	});
}

export default Component;
