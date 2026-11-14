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
		"content": `<style>.k69p78t_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.671 3.335l4.146 2.073a1.5 1.5 0 0 1 0 2.684l-4.146 2.073a1.5 1.5 0 0 1-1.342 0L7.183 8.092a1.5 1.5 0 0 1 0-2.684l4.146-2.073a1.5 1.5 0 0 1 1.342 0M4.5 11.75L12 15.5l7.5-3.75m-15 5L12 20.5l7.5-3.75m-17-2.5h19");
}
</style><path class="k69p78t_m"/>`,
		"fallback": "uix:deep-scan",
	});
}

export default Component;
