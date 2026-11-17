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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.m3cgg7-1n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 19h1a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v1m-1 5h5v5m0-5l-6 6");
}

.yowuslbzl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 19V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4Z");
}
</style><g class="ft5dv1b6b"><path class="yowuslbzl"/><path class="m3cgg7-1n"/></g>`,
		"fallback": "coolicons:external-link-alt-duotone-round",
	});
}

export default Component;
