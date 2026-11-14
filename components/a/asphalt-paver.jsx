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
		"content": `<style>.baxw5dbuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.125 8h3.25A2.625 2.625 0 0 1 16 10.625v1.25a2.625 2.625 0 0 1-2.625 2.625h-3.25A2.625 2.625 0 0 1 7.5 11.875v-1.25A2.625 2.625 0 0 1 10.125 8M16 3.5v11h2.5l3-11M10 14.5h2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M7.5 11H4v4.5m0 0zA1.5 1.5 0 0 1 5.5 17A1.5 1.5 0 0 1 4 18.5A1.5 1.5 0 0 1 2.5 17A1.5 1.5 0 0 1 4 15.5m-1.5 6h19");
}
</style><path class="baxw5dbuz"/>`,
		"fallback": "uix:asphalt-paver",
	});
}

export default Component;
