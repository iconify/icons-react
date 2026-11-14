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
		"content": `<style>.k0g--hbzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 7.5h.75A2.625 2.625 0 0 1 8.5 10.125v7.75A2.625 2.625 0 0 1 5.875 20.5h-.75A2.625 2.625 0 0 1 2.5 17.875v-7.75A2.625 2.625 0 0 1 5.125 7.5m.125-2h.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1M11.5 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0m4.25 1.75l2.25-4");
}
</style><path class="k0g--hbzt"/>`,
		"fallback": "uix:battery-tester",
	});
}

export default Component;
