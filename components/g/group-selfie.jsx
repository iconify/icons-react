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
		"content": `<style>.esw_j9jlq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M6.5 21.5C6.5 17.75 9 16 12 16s5.5 1.75 5.5 5.5M7 18.5l-2.5-9m-.25-7h.5A1.75 1.75 0 0 1 6.5 4.25v3.5A1.75 1.75 0 0 1 4.75 9.5h-.5A1.75 1.75 0 0 1 2.5 7.75v-3.5A1.75 1.75 0 0 1 4.25 2.5M17 6.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m.25 7c.25-1.5 1-2.25 2-2.25c1.25 0 2.25 1 2.25 2.25");
}
</style><path class="esw_j9jlq"/>`,
		"fallback": "uix:group-selfie",
	});
}

export default Component;
