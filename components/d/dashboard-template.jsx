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
		"content": `<style>.aad5502ae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5V5a2 2 0 0 1 2-2h.5m13 0h.5a2 2 0 0 1 2 2v.5m0 2V8a2 2 0 0 1-2 2h-.5m-13 0H5a2 2 0 0 1-2-2v-.5M8.25 3h2.25m3 0h2.25m-7.5 7h2.25m3 0h2.25M3 15.75v-.25a2 2 0 0 1 2-2h.25m3 0h.25a2 2 0 0 1 2 2v.25m0 3V19a2 2 0 0 1-2 2h-.25m-3 0H5a2 2 0 0 1-2-2v-.25m10.5-3v-.25a2 2 0 0 1 2-2h.25m3 0H19a2 2 0 0 1 2 2v.25m0 3V19a2 2 0 0 1-2 2h-.25m-3 0h-.25a2 2 0 0 1-2-2v-.25");
}
</style><path class="aad5502ae"/>`,
		"fallback": "uix-sharp:dashboard-template",
	});
}

export default Component;
