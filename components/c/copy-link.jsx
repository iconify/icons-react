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
		"content": `<style>.ail0y-9zd {
  d: path("M8.5 8.5h12v12h-12Z");
}

.i1ih5k38s {
  d: path("M4 14.5V6a2.5 2.5 0 0 1 2.5-2.5h8M13 12h-.5a2.5 2.5 0 0 0 0 5h.5m3-5h.5a2.5 2.5 0 0 1 0 5H16m-3-2.5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ail0y-9zd"/><path class="i1ih5k38s"/></g>`,
		"fallback": "uix-sharp:copy-link",
	});
}

export default Component;
