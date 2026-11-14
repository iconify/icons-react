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
		"content": `<style>.eai7nzbkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13V4.5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2V13M4 13h10a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 14 16H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 13m.5 3v5.5m9-5.5v1.8m0 2.4v1.3M19 16q1 2 3 3q-2 1-3 3q-1-2-3-3q2-1 3-3");
}
</style><path class="eai7nzbkr"/>`,
		"fallback": "uix:furniture-polish",
	});
}

export default Component;
