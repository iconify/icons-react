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
		"content": `<style>.k34oaxz9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 14h12.5a3.25 3.25 0 0 1 3.25 3.25a3.25 3.25 0 0 1-3.25 3.25H5.75a3.25 3.25 0 0 1-3.25-3.25A3.25 3.25 0 0 1 5.75 14m3.875-7.5h4.75A2.625 2.625 0 0 1 17 9.125v2.25A2.625 2.625 0 0 1 14.375 14h-4.75A2.625 2.625 0 0 1 7 11.375v-2.25A2.625 2.625 0 0 1 9.625 6.5m.375 0v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2M6.5 17.25h.01m10.99 0h.01");
}
</style><path class="k34oaxz9b"/>`,
		"fallback": "uix:baggage-claim-belt",
	});
}

export default Component;
