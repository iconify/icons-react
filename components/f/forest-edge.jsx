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
		"content": `<style>.m6ytspb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14L4.75 3L7 14l2.5-9l2.5 9l2-6l2 6Zm0 5h19M4.75 14v5m4.75-5v5m4.5-5v5");
}
</style><path class="m6ytspb5t"/>`,
		"fallback": "uix:forest-edge",
	});
}

export default Component;
