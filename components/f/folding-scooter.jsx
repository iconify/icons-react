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
		"content": `<style>.rmf86n4hs {
  d: path("M2.5 16.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm14 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yj9g9b4qe {
  d: path("M5 16.5L7 14h7.5m4.5 2.5l-1.75-4.75m-2.5-2l-10.25-2M14.75 10a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM4.5 5.5V10");
}
</style><g class="ulnmmdpxh"><path class="rmf86n4hs"/><path class="yj9g9b4qe"/></g>`,
		"fallback": "uix-sharp:folding-scooter",
	});
}

export default Component;
