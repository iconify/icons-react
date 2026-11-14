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
		"content": `<style>.qq7dnpb8e {
  d: path("M6 17.25a6 6 0 0 1 12 0Z");
}

.stp1l5dou {
  d: path("m2.692 10.7l18.096-3.846l.52 2.446l-18.096 3.846Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="stp1l5dou"/><path class="qq7dnpb8e"/></g>`,
		"fallback": "uix-sharp:balance-training",
	});
}

export default Component;
