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
		"content": `<style>.o4k9krb3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19M5 6h.5A1.5 1.5 0 0 1 7 7.5v3A1.5 1.5 0 0 1 5.5 12H5a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 5 6m6.75-3h.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5m6.75 9h.5a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 19 20h-.5a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="o4k9krb3h"/>`,
		"fallback": "uix:budget-deficit",
	});
}

export default Component;
