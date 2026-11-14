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
		"content": `<style>.kv5ylacwr {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M15 15l6 6m0-6l-6 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uuroep7vz {
  d: path("M3.5 3v17.5h8.1");
}
</style><g class="ulnmmdpxh"><path class="uuroep7vz"/><path class="kv5ylacwr"/></g>`,
		"fallback": "uix-sharp:chart-error",
	});
}

export default Component;
