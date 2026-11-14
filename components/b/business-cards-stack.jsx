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
		"content": `<style>.dmx341b4m {
  d: path("M6.5 9V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2m-11-3h.01m2.99-1.5h5m-5 3H13");
}

.mckzq6m5b {
  d: path("M2.5 9h15v10h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mckzq6m5b"/><path class="dmx341b4m"/></g>`,
		"fallback": "uix-sharp:business-cards-stack",
	});
}

export default Component;
