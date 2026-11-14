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
		"content": `<style>.rtxz55ojd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4.5 0V3C12.75 5 16 5 16 8M4 17v2m4-3.5v5m4-5.5v6m4-5.5v5m4-3.5v2");
}
</style><path class="rtxz55ojd"/>`,
		"fallback": "uix-sharp:audio-original",
	});
}

export default Component;
