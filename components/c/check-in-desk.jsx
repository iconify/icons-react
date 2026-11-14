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
		"content": `<style>.ekzj6jbgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 11h13.75a2.625 2.625 0 0 1 2.625 2.625v3.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 16.875v-3.25A2.625 2.625 0 0 1 5.125 11M7.5 11a4.5 4.5 0 0 1 9 0m-14 3h19M12 4v2.5");
}
</style><path class="ekzj6jbgw"/>`,
		"fallback": "uix:check-in-desk",
	});
}

export default Component;
