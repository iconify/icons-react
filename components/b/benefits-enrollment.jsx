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
		"content": `<style>.xq_io2bhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 11.5h4.25A2.625 2.625 0 0 1 12 14.125v4.75A2.625 2.625 0 0 1 9.375 21.5h-4.25A2.625 2.625 0 0 1 2.5 18.875v-4.75A2.625 2.625 0 0 1 5.125 11.5m2.125 0C6 11.5 5 10.75 5 9.75s1.75-1 2.25 1.75c.5-2.75 2.25-2.75 2.25-1.75s-1 1.75-2.25 1.75m0 0v10M12 13l3 1.75m0 0l1.5-2.25h5V17h-5Zm3.5-2.25l-2.25-.75L12.5 8L14 6.5l3.75 3.75Zm-5.25-2.75l1.5-1.5");
}
</style><path class="xq_io2bhq"/>`,
		"fallback": "uix:benefits-enrollment",
	});
}

export default Component;
