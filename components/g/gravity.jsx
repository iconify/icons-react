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
		"content": `<style>.eqo4lp1tp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.344 6.5h9.312a1.75 1.75 0 0 1 1.69 1.299l1.067 4A1.75 1.75 0 0 1 17.722 14H6.278a1.75 1.75 0 0 1-1.691-2.201l1.067-4A1.75 1.75 0 0 1 7.344 6.5m2.156 0V5a2.5 2.5 0 0 1 5 0v1.5M12 16.75v4.75M9.5 19l2.5 2.5l2.5-2.5");
}
</style><path class="eqo4lp1tp"/>`,
		"fallback": "uix:gravity",
	});
}

export default Component;
