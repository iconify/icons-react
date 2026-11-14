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
		"content": `<style>.dsnlt4rde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.316 13.099l-3.295 3.06A1.5 1.5 0 0 1 9.5 15.06V8.94a1.5 1.5 0 0 1 2.521-1.099l3.295 3.06a1.5 1.5 0 0 1 0 2.198");
}
</style><path class="dsnlt4rde"/>`,
		"fallback": "uix:caret-right",
	});
}

export default Component;
