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
		"content": `<style>.l7t4m27rk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15.5L8 4.5l4.5 11m-7.25-4h5.5m-8.25 9h19m-3.5-4v-12m-3 3l3-3l3 3");
}
</style><path class="l7t4m27rk"/>`,
		"fallback": "uix-sharp:baseline-shift",
	});
}

export default Component;
