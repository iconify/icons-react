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
		"content": `<style>.e5dru_bla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8L4 3h16l1.5 5M6.125 14h11.75a2.625 2.625 0 0 1 2.625 2.625v2.25a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875v-2.25A2.625 2.625 0 0 1 6.125 14M2.5 8c0 1.75 3.75 1.75 3.75 0c0 1.75 4 1.75 4 0c0 1.75 3.5 1.75 3.5 0c0 1.75 4 1.75 4 0c0 1.75 3.75 1.75 3.75 0m-17 2v4m15-4v4M12 15.75v4m-2-2h4");
}
</style><path class="e5dru_bla"/>`,
		"fallback": "uix:first-aid-station",
	});
}

export default Component;
