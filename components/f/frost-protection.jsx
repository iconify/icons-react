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
		"content": `<style>.sr_5efb8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l7.5 2.75V11c0 5-3.25 8.75-7.5 10.5C7.75 19.75 4.5 16 4.5 11V5.25ZM12 7v9M8.25 9.25l7.5 4.5m-7.5 0l7.5-4.5");
}
</style><path class="sr_5efb8b"/>`,
		"fallback": "uix:frost-protection",
	});
}

export default Component;
