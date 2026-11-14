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
		"content": `<style>.ycf-tgbjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 6.5h12.75A2.625 2.625 0 0 1 21 9.125v8.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 17.875v-8.75A2.625 2.625 0 0 1 5.625 6.5m.875 0v-3H3m14.5 3v-3H21m-13.5 6v8m4.5-8v8m4.5-8v8");
}
</style><path class="ycf-tgbjh"/>`,
		"fallback": "uix:condenser",
	});
}

export default Component;
