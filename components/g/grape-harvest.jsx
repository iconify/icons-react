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
		"content": `<style>.wakld0bgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5V20A1.5 1.5 0 0 0 4 21.5h16a1.5 1.5 0 0 0 1.5-1.5v-4.5m-19 3h19m-19-10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M4 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m11.5-2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M17 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M9 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.5 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="wakld0bgc"/>`,
		"fallback": "uix:grape-harvest",
	});
}

export default Component;
