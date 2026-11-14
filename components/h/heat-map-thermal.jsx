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
		"content": `<style>.cs9vpgrcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.7 18H3V3h15v5.2M8 3v15m5-15v14M3 8h15M3 13h10.9m-3.4-2.5h.01m6.24 6v-4.25a1.25 1.25 0 0 1 2.5 0v4.25a2.5 2.5 0 1 1-2.5 0Z");
}
</style><path class="cs9vpgrcb"/>`,
		"fallback": "uix-sharp:heat-map-thermal",
	});
}

export default Component;
