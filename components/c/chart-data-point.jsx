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
		"content": `<style>.ln18mrbuc {
  d: path("m2.5 18l5-6.5l4.5 3L16.5 7l5 3.5");
}

.pjsk27gae {
  fill: currentColor;
  d: path("M14 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ln18mrbuc"/><path class="pjsk27gae"/></g>`,
		"fallback": "uix-sharp:chart-data-point",
	});
}

export default Component;
