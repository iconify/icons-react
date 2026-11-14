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
		"content": `<style>.cic9bggnc {
  d: path("M5.5 3H7v16.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1.5");
}

.k3a74xbtr {
  d: path("M9.75 13a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cic9bggnc"/><path class="k3a74xbtr"/></g>`,
		"fallback": "uix-sharp:gas-jar",
	});
}

export default Component;
