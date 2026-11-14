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
		"content": `<style>.lld88obad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13c-4.5 0-7.5-3-7.5-8.5c3 1 4.5 3.5 4.5 6c0 1.25 1.25 2.25 3 2.5m0 0c4.5 0 7.5-3 7.5-8.5c-3 1-4.5 3.5-4.5 6c0 1.25-1.25 2.25-3 2.5m0-5.25V21.5M10.25 6a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M12 19.5c0-2.5 2-3.5 5-3.5c0 2.5-2 3.5-5 3.5");
}
</style><path class="lld88obad"/>`,
		"fallback": "uix:flower-anatomy",
	});
}

export default Component;
