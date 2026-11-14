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
		"content": `<style>.fzjf-0b7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5C9 15 7 8 10.5 2.5m7.5 19c.5-6.5-6-12.5-4.5-19");
}
</style><path class="fzjf-0b7y"/>`,
		"fallback": "uix:cross-country-trail",
	});
}

export default Component;
