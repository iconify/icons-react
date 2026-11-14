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
		"content": `<style>.avs9ak-0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5C10 5 7 4.5 2.5 5v13.5C7 18 10 18.5 12 20c2-1.5 5-2 9.5-1.5V5C17 4.5 14 5 12 6.5m0 0V20");
}
</style><path class="avs9ak-0s"/>`,
		"fallback": "uix:api-reference",
	});
}

export default Component;
